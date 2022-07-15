import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Comments/Comments";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const fetchBlog =  useCallback(async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/blogs/blog/${id}`);
    setBlog(res.data.blog);
  },[id]);
  useEffect(() => {
    fetchBlog();
  }, [fetchBlog, blog, id]);
  return (
    <section className="flex justify-center items-center mt-2 p-4">
      <div className="w-blogbody flex justify-center items-start bg-white shadow">
        <div className="w-10/12 flex flex-col gap-y-6">
          <div className="w-full h-[30rem]">
            <img src={blog.coverImage} alt="" className="h-full w-full"/>
          </div>
          <div>
            <h1 className="text-2xl font-SecularOne font-bold">{blog.title}</h1>
            <p className="text-lg font-serif whitespace-pre-wrap">{blog.content}</p>
          </div>
          <div className="w-full">
            <Comments commentList = {blog.comments}/>
          </div>
        </div>
      </div>
    </section>
  );
}
