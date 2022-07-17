import axios from 'axios';
import React from 'react'
import { message } from 'antd';

export default function DeleteButton(props) {
    const { id, token } = props;
    const deleteBlog = async() => {
      console.log(id);
      try{
        await axios.delete(`https://new-blog-verse.herokuapp.com/api/v1/blogs/delete-blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        message.success('Blog deleted successfully', 3);
      }catch(err){
        console.log(err);
      }
    }

  return (
    <button className="font-semibold p-2 w-full bg-slate-200 hover:bg-red-500 hover:text-white" onClick={()=>deleteBlog()}>Delete</button>
  )
}
