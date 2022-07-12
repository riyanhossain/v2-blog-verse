import React from 'react'
import { useParams } from 'react-router-dom';

export default function BlogByCategory() {
    //useParams hook to get the category from the url
    const { category } = useParams();

  return (
    <section className='flex justify-center items-center mt-2'>
        <div className='w-[1200px] flex justify-center items-start'>
            <h1>{category}</h1>
        </div>
    </section>
  )
}
