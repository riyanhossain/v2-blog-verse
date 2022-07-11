import React from 'react'
import { useParams } from 'react-router-dom';

export default function BlogByCategory() {
    //useParams hook to get the category from the url
    const { category } = useParams();

  return (
    <div>{category}</div>
  )
}
