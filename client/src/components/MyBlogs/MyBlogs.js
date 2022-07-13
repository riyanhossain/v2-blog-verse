import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContex } from "../../App";
import Blog from "../Home/Blog";

export default function MyBlogs() {
  const [state, dispatch] = useContext(UserContex);
  const { user, token } = state;
  const [blogList, setBlogList] = useState([]);
  const fetchMyBlogs = useCallback(async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/blogs/myblogs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBlogList(res.data.blogs);
  }, [token]);
  useEffect(() => {
    fetchMyBlogs();
  }, [fetchMyBlogs]);
  return     <div>            {
    blogList.map((blog, index) => {
        return <Blog key={index} blog={blog} myblogs={true} token={token} />
    })
}
{
    blogList.length === 0 && <h1>No blogs found</h1>
}</div>;
}
