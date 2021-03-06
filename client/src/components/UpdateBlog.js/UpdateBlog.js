import axios from 'axios';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { UserContex } from '../../App';
import { message } from 'antd';
import { useParams } from 'react-router-dom';

export default function UpdateBlog() {

    const { id } = useParams();
    const [form, setForm] = useState({
        category: "javascript",
      });
    const [preview, setPreview] = useState(form.coverImage);
    const fetchBlog =  useCallback(async () => {
      const res = await axios.get(`/api/v1/blogs/blog/${id}`);
      delete res.data.blog.user;
      setForm(res.data.blog);
      setPreview(res.data.blog.coverImage);
    },[id]);
    useEffect(() => {
      fetchBlog();
    }, [fetchBlog]);
    const ref = useRef();

    const reset = () => {
      ref.current.value = "";
    };
  
    const [state ] = useContext(UserContex);
    const { token } = state;
    const buttons = [
      "javascript",
      "dotnet",
      "csharp",
      "python",
      "dart",
      "kotlin",
      "html",
    ];

    const handleInputs = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
    const handleImage = (e) => {
      setForm({
        ...form,
        coverImage: e.target.files[0],
      });
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setPreview(objectUrl)
    }
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(form);
      try{
        const res = await axios.patch(`/api/v1/blogs/update-blog/${id}`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type" : "multipart/form-data",
          }
        })
        if(res.data.message){
          message.success(res.data.message);
        }
        setForm({
          category: "javascript",
          title: "",
          content: "",
          coverImage: "",
          readTime: "",
        });
        reset();
  
      }catch(err){
        console.log(err)
      }
  
    }
    useEffect(() => {
      if(!form.coverImage)
      setPreview(false);
    },[form.coverImage]);
  return (
    <section className='flex justify-center items-center mt-2'>
    <div className='w-blogbody flex justify-center items-start'>
    <div className="w-[45rem] bg-white shadow-lg flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-16">Share Your Blog</h1>
      {preview &&  <img src={preview} alt="" className="w-10/12 h-[20rem]"/> }
      <form
        action=""
        className="w-10/12 h-[35rem] flex flex-col gap-y-4"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          ref={ref}
          type="file"
          id="coverImage"
          name="coverImage"
          className="bg-slate-100 outline-blue-200 p-2 w-full"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImage}
          required
        />
        <input
          type="text"
          placeholder="title"
          maxLength={160}
          name="title"
          className="w-full p-2 bg-slate-100 outline-blue-200"
          autoComplete="title"
          onChange={handleInputs}
          value={form.title}
          required
        />
        <textarea
          type="text"
          placeholder="content"
          name="content"
          className="w-full p-2 bg-slate-100 outline-blue-200"
          rows={6}
          onChange={handleInputs}
          value={form.content}
          required
        />
        <input
          type="number"
          placeholder="read time"
          max={20}
          min={2}
          name="readTime"
          className="w-full p-2 bg-slate-100 outline-blue-200"
          autoComplete="readTime"
          onChange={handleInputs}
          value={form.readTime}
          required
        />
        <select
          name="category"
          className="w-full p-2 bg-slate-100 outline-blue-200"
          value={form.category}
          onChange={handleInputs}
        >
          {buttons.map((button, index) => {
            return (
              <option key={index} value={button}>
                {button}
              </option>
            );
          })}
        </select>
        <input
          type="Submit"
          value="Update"
          className="w-full p-2 bg-blue-500 text-white font-bold outline-blue-200"
          readOnly
        />
      </form>
    </div>
    </div>
</section>
  )
}
