import React from "react";
import Categories from "../Home/Categories";
import RandomBlogList from "../Home/RandomBlogList";
import MyBlogs from "./MyBlogs";

export default function MyBlogsLayout() {
  return (
    <section className="flex justify-center items-center mt-2">
      <div className="w-[1200px] flex justify-between items-start">
        <Categories />
        <MyBlogs />
        <RandomBlogList />
      </div>
    </section>
  );
}
