import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Blog from '../Home/Blog';

export default function BlogsByCategory() {
        const [blogList, setBlogList] = useState([]);
        const { category } = useParams();
        const fetchBlogByCategory = useCallback(
          async () => {
            const res = await axios.get(`https://new-blog-verse.herokuapp.com/api/v1/blogs/category/${category}`);
            setBlogList(res.data.blogs);
          },[category]
        )
        useEffect(() => {
          fetchBlogByCategory();
        },[fetchBlogByCategory]);
  return (
    <div className="w-[40rem] flex flex-col justify-center items-center gap-y-4">            {
        blogList.map((blog, index) => {
            return <Blog key={index} blog={blog} />
        })
    }
    {
        blogList.length === 0 && <h1>No blogs found</h1>
    }</div>
  )
}
