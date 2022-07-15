import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RandomBlogList() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/blogs/get-blogs");
    setBlogs(res.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  const shuffledBlogs = shuffle(blogs);
  return (
    <div className="w-[18rem] h-96 flex flex-col justify-evenly items-center bg-white">
      {shuffledBlogs.slice(0, 5).map((blog, index) => {
        return (
          <div key={index} className="hover:bg-slate-100 h-24 w-11/12 flex justify-center items-center">
            <Link
              to={`/blog/${blog._id}`}
              className="w-full font-SecularOne font-bold text-black flex items-center justify-center  font-title hover:text-emerald-500 transition"
            >
              {blog.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
