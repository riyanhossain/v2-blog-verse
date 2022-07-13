import React from 'react'

export default function DeleteBlog(props) {
    const { id, token } = props;

  return (
    <button className="font-semibold p-2 w-full bg-slate-200 hover:bg-red-500 hover:text-white">Delete</button>
  )
}
