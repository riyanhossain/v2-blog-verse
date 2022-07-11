const blogModel = require("../models/blog");
const fs = require("fs");

const createBlog = async (req, res) => {
  const newUrl = new URL(`${req.protocol}://${req.get("host")}`);
  try {
    req.body.coverImage = newUrl.origin + "/cover_images/" + req.file.filename;
    req.body.imageName = req.file.filename;
    const blog = await blogModel.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(200).json({
      message: "Blog created",
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    if (blog) {
      fs.unlinkSync(`public/cover_images/${blog.imageName}`);
      res.status(200).json({
        message: "Blog deleted",
      });
    } else {
      res.status(200).json({
        message: "Blog not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const updateBlog = async (req, res) => {
  const newUrl = new URL(`${req.protocol}://${req.get("host")}`);
  try {
    if (req.file) {
      req.body.coverImage =
        newUrl.origin + "/cover_images/" + req.file.filename;
      req.body.imageName = req.file.filename;
    }
    const blog = await blogModel.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    if (blog) {
      res.status(200).json({
        message: "Blog updated",
      });
    } else {
      res.status(200).json({
        message: "Blog not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel
      .find({ draft: false })
      .skip(req.query.skip*20)
      .limit(20)
      .populate("comments", "userName content")
      .populate("user", "name");
    res.status(200).json({
      message: "Blogs fetched",
      blogs,
    });
  } catch (err) {
    console.log(err);
  }
};

const searchBlogs = async (req, res) => {
  try {
    const blogs = await blogModel
      .find({
        draft: false,
        $or: [
          { title: { $regex: req.query.search, $options: "i" } },
          { category: { $regex: req.query.search, $options: "i" } },
        ],
      })
      .populate("comments", "userName content")
      .populate("user", "name");
    res.status(200).json({
      message: "Blogs fetched",
      blogs,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlogs,
  searchBlogs,
};
