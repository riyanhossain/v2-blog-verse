import React from "react";

export default function Blog() {
  const blog = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return blog.map((blog) => (
    <div className="w-[40rem] h-96 bg-white flex justify-center">
      <h1>{blog}</h1>
    </div>
  ));
}
