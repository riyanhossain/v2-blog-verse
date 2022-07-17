import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";

export default function MainBlogContent() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get(
      "https://new-blog-verse.herokuapp.com/api/v1/blogs/get-blogs"
    );
    setBlogs(res.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="w-[40rem] flex flex-col justify-center gap-y-4">
      {blogs &&
        blogs.map((blog, index) => {
          return <Blog key={index} blog={blog} />;
        })}
    </div>
  );
}
