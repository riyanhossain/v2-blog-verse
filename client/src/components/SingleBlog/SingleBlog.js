import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const fetchBlog =  useCallback(async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/blogs/blog/${id}`);
    setBlog(res.data.blog);
  },[id]);
  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);
  return (
    <section className="flex justify-center items-center mt-2">
      <div className="w-[1200px] flex justify-center items-start bg-white shadow">
        <div className="w-10/12 flex flex-col gap-y-6">
          <div className="w-full h-[30rem]">
            <img src={blog.coverImage} alt="" className="h-full w-full"/>
          </div>
          <div>
            <h1 className="text-2xl font-SecularOne font-bold">{blog.title}</h1>
            <p className="text-lg font-serif whitespace-pre-wrap">{blog.content}</p>
          </div>
          <div>
            <h1>comments</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
