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
  }, [blog,id,fetchBlog]);
  console.log(blog);
  return (
    <section className="flex justify-center items-center mt-2">
      <div className="w-[1200px] flex justify-center items-start">
        <div className="w-10/12 flex flex-col ">
          <div className="w-full h-[30rem]">
            <img src={blog.coverImage} alt="" className="h-full w-full"/>
          </div>
          <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
          <div>
            {
              blog.comments && blog.comments.map((comment, index) => {
                return <p key={index}>{comment.content}{comment.userName}</p>;
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}
