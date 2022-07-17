import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../Home/Blog";

export default function BlogsBySearch() {
  const [blogList, setBlogList] = useState([]);
  const { search } = useParams();
  const fetchBlogBySearch = useCallback(async () => {
    const res = await axios.get(
      `/api/v1/blogs/search-blogs?search=${search}`
    );
    setBlogList(res.data.blogs);
  }, [search]);
  useEffect(() => {
    fetchBlogBySearch();
  }, [fetchBlogBySearch]);
  console.log(blogList);
  return (
    <div>
      {" "}
      {blogList.map((blog, index) => {
        return <Blog key={index} blog={blog} />;
      })}
      {blogList.length === 0 && <h1>No blogs found</h1>}
    </div>
  );
}
