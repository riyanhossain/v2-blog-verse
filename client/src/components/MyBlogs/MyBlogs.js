import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContex } from "../../App";
import Blog from "../Home/Blog";

export default function MyBlogs() {
  const [state] = useContext(UserContex);
  const { token } = state;
  const [blogList, setBlogList] = useState([]);
  const fetchMyBlogs = useCallback(async () => {
    const res = await axios.get(`/api/v1/blogs/myblogs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBlogList(res.data.blogs);
  }, [token]);
  useEffect(() => {
    fetchMyBlogs();
  }, [fetchMyBlogs, blogList]);
  return (
    <div className="w-[40rem] flex flex-col justify-center items-center gap-y-4">
      {blogList.map((blog, index) => {
        return <Blog key={index} blog={blog} myblogs={true} token={token} />;
      })}
      {blogList.length === 0 && <h1>No blogs found</h1>}
    </div>
  );
}
