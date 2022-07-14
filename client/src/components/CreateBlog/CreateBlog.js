import React from 'react'
import CreateBlogForm from './CreateBlogForm'

export default function CreateBlog() {
  return (
    <section className="flex justify-center items-center mt-2">
    <div className="w-blogbody flex justify-center items-start" >
      <CreateBlogForm />
    </div>
  </section>
  )
}
