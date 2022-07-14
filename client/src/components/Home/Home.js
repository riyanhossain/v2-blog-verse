import React from 'react'
import Categories from './Categories'
import MainBlogContent from './MainBlogContent'
import RandomBlogList from './RandomBlogList'

export default function Home() {
  return (
    <section className='flex justify-center items-center mt-2'>
      <div className='w-blogbody flex justify-between items-start'>
        <Categories/>
        <MainBlogContent/>
        <RandomBlogList/>
      </div>
    </section>
  )
}
