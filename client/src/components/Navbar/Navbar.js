import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center h-14 bg-white'>
        <div className='w-[1200px] flex justify-between items-center'>
            <div className='flex gap-x-4'>
                <Link to='/' className='flex justify-center items-center'><h1 className='font-bold mb-0 text-black'>BlogVerse</h1></Link>
                <Search/>
            </div>
            <div className='flex'>
                <Link to='/login'><button className='font-semibold text-black p-2 w-16 rounded hover:bg-slate-100 '>Login</button></Link>
                <Link to='/register'><button className='font-semibold p-2 w-32 rounded hover:bg-slate-100 '>Create account</button></Link>
                {/* after login
                profile
                create post */}
            </div>
        </div>
    </div>
  )
}
