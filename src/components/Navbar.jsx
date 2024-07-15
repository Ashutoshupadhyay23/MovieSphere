import React from 'react'
import movieIcon from '../assets/movie_icon.png'

const Navbar = () => {
  return (
    <div className='flex border-2 space-x-8 items-center pl-3 py-3'>
        <img src={movieIcon} alt="movieIcon" className='w-[35px]' />
        <a href="/" className='text-blue-500 text-xl font-semibold'>Home</a>
        <a href="/watchlist" className='text-blue-500 text-xl font-semibold'>Watchlist</a>
    </div>
  )
}

export default Navbar