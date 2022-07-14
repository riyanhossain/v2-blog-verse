import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UpdateButton(props) {
  const { id } = props;
  const navigate = useNavigate();
  return (
    <button className="font-semibold p-2 w-full bg-slate-200 hover:bg-green-500 hover:text-white" onClick={()=>navigate(`/private/edit-blog/${id}`)}>Update</button>
  )
}
