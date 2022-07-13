import React from "react";
import Categories from "../Home/Categories";
import RandomBlogList from "../Home/RandomBlogList";
import BlogsBySearch from "./BlogsBySearch";

export default function SearchBlogLayout() {
  return (
    <section className="flex justify-center items-center mt-2">
      <div className="w-[1200px] flex justify-between items-start">
        <Categories />
        <BlogsBySearch />
        <RandomBlogList />
      </div>
    </section>
  );
}
