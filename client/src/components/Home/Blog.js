import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../MyBlogs/DeleteButton";
import UpdateButton from "../MyBlogs/UpdateButton";

export default function Blog(props) {
  const { blog, myblogs, token } = props;
  const { _id, title, category, createdAt, coverImage, readTime, user } = blog;
  console.log(myblogs);
  return (
    <div className="w-[40rem] h-[30rem] bg-white flex flex-col justify-center items-center relative shadow-lg">
      <div className="h-2/3 w-full flex justify-center items-center">
        <img src={coverImage} alt="" className="h-[85%] w-11/12" />
        <div className="flex absolute right-7 top-2 gap-x-2">
          <p className="p-1 bg-slate-800 flex justify-center items-center text-sm text-white">
            {new Date(createdAt).toDateString()}
          </p>
          <p className="p-1 bg-slate-800 flex justify-center items-center text-white text-sm">
            {readTime} mins read
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-11/12">
          <div className="flex justify-between">
            <p className="p-1 bg-slate-200 flex justify-center items-center text-sm">
              {category}
            </p>
            <p className="p-1 bg-slate-200 flex justify-center items-center text-sm">{user.name}</p>
          </div>
          <Link to={`/blog/${_id}`} className="w-full text-2xl font-SecularOne font-bold text-black lg:text-2xl md:text-2xl  font-title hover:text-emerald-500 transition">
            {title}
          </Link>

        </div>
      </div>
      {
        myblogs && (
          <div className="flex justify-center items-center w-11/12 gap-x-4">
            <DeleteButton id={_id} token={token}/>
            <UpdateButton id={_id} />
          </div>
        )
      }
    </div>
  );
}
