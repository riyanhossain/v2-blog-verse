import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContex } from "../../App";

export default function Comments(props) {
  const { commentList } = props;
  const [state] = useContext(UserContex);
  const { isSignIn, user } = state;
  const { id } = useParams();
  const [comments, setComments] = useState({});
  const handleInputs = (e) => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      content: comments.content,
      userName: isSignIn ? user.name : "Anonymous",
      blogId: id,
    };
    try{
      await axios
      .post(`http://localhost:5000/api/v1/comments/post-comment`, data);
      setComments({
        content: "",
      });

    }catch(err){
      console.log(err);
    }
  };
  return (
    <section>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <textarea
          name="content"
          id="content"
          rows="3"
          value={comments.content}
          className="w-full bg-slate-100 p-2 outline-blue-400"
          placeholder="Your Comment"
          onChange={handleInputs}
        />
        <input
          type="Submit"
          value="Comment"
          className="bg-blue-600 p-2 w-24 font-semibold text-white"
        />
      </form>
      <div className=" mt-4 flex flex-col gap-y-4">
        {commentList &&
          commentList.map(({userName, createdAt, content}) => (
            <div className="flex flex-col border-2 shadow-lg p-4">
              <div className="flex gap-x-4 items-center">
              <p className="font-bold text-lg ">{userName}</p>
              <p className="">{new Date(createdAt).toDateString()}</p>
              </div>
              <div className="w-full ">
                <p className="text-lg">{content}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
