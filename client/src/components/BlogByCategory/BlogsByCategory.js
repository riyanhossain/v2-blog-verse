import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Blog from '../Home/Blog';

export default function BlogsByCategory() {
        //useParams hook to get the category from the url
        const [blogList, setBlogList] = useState([]);
        const { category } = useParams();
        const fetchBlogByCategory = useCallback(
          async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/blogs/${category}`);
            setBlogList(res.data.blogs);
          },[category]
        )
        useEffect(() => {
          fetchBlogByCategory();
        },[fetchBlogByCategory]);
  return (
    <div>            {
        blogList.map((blog, index) => {
            return <Blog key={index} blog={blog} />
        })
    }
    {
        blogList.length === 0 && <h1>No blogs found</h1>
    }</div>
  )
}
