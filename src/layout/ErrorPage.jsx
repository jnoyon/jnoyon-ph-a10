import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='flex items-center justify-center min-h-lvh'>
      <div className="bg-red-100 md:w-1/3 rounded-md p-5 shadow-md text-center ">
        <h1 className='font-bold text-xl md:text-3xl mb-2'> "404: We Couldn't Find That!" </h1>
        <p className='mb-2'> Oops! The page you're looking for doesn’t exist. Check the URL, use our search bar, or return to the homepage. </p>
        <Link to='/'> Go to Homepage </Link>
      </div>
    </div>
  )
}
