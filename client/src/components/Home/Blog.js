import React from "react";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const { blog } = props;
  return (
    <div className="w-[40rem] h-[30rem] bg-white flex flex-col relative">
      <div className="h-2/3 w-full flex justify-center items-center">
        <img src={blog.coverImage} alt="" className="h-[85%] w-11/12" />
        <div className="flex absolute right-4 top-2 gap-x-2">
          <p className="p-1 bg-slate-800 flex justify-center items-center text-sm text-white">
            {new Date(blog.createdAt).toDateString()}
          </p>
          <p className="p-1 bg-slate-800 flex justify-center items-center text-white text-sm">
            3 mins read
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-11/12 mt-2">
          <div className="flex justify-between">
            <p className="p-1 bg-slate-200 flex justify-center items-center text-sm">
              {blog.category}
            </p>
            <p className="p-1 bg-slate-200 flex justify-center items-center text-sm">{blog.user.name}</p>
          </div>
          <Link to={`/blog/${blog._id}`} className="text-2xl font-SecularOne font-bold text-black lg:text-3xl md:text-2xl  font-title hover:text-emerald-500 transition">
            {blog.title}
          </Link>

        </div>
      </div>
    </div>
  );
}
