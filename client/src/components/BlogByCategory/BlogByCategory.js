import React from 'react'
import Categories from '../Home/Categories'
import RandomBlogList from '../Home/RandomBlogList'
import BlogsByCategory from './BlogsByCategory'


export default function BlogByCategory() {

  return (
    <section className='flex justify-center items-center mt-2'>
        <div className='w-blogbody flex justify-between items-start'>
          <Categories/>
          <BlogsByCategory/>
          <RandomBlogList/>
        </div>
    </section>
  )
}
