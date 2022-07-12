import React, { useCallback, useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";

export default function MainBlogContent() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/blogs/get-blogs");
    setBlogs(res.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, [blogs]);
  return (
    <div className="w-[40rem] min-h-screen flex flex-col justify-center  gap-y-4">
      {blogs.map((blog, index) => {
        return <Blog key={index} blog={blog} />;
      })}
    </div>
  );
}
