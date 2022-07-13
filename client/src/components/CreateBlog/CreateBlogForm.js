import React from "react";

export default function CreateBlogForm() {
    const buttons = [
        "javascript",
        "dotnet",
        "csharp",
        "python",
        "dart",
        "kotlin",
        "html",
      ];
  return (
    <div className="w-[45rem] h-[35rem] bg-white shadow-lg flex flex-col justify-center items-center">
      <h1 className="text-2xl">Share Your Blog</h1>
      <form action="" className="w-10/12 flex flex-col gap-y-4">
        <input
          type="file"
          id="coverImage"
          name="coverImage"
          className="bg-slate-100 outline-blue-200 p-2 w-full"
          accept="image/png, image/jpeg, image/jpg"
          //   onChange={uploadImage}
          required
        />
        <input
          type="text"
          placeholder="title"
          maxLength={160}
          name="title"
          className="w-full p-2 bg-slate-100 outline-blue-200"
          required
        />
        <textarea
          type="text"
          placeholder="content"
          maxLength={160}
          name="title"
          className="w-full p-2 bg-slate-100 outline-blue-200"
          rows={6}
          required
        />
        <input
          type="number"
          placeholder="read time"
          max={20}
          min={2}
          name="readTime"
          className="w-full p-2 bg-slate-100 outline-blue-200"
          required
        />
        <select name="category" className="w-full p-2 bg-slate-100 outline-blue-200">
            {buttons.map((button, index) => {
                return (
                    <option key={index} value={button}>
                        {button}
                    </option>
                );
            })}
        </select>
        <input type="Submit" value="Share" className="w-full p-2 bg-blue-500 text-white font-bold outline-blue-200" />
      </form>
    </div>
  );
}
