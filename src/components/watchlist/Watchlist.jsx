import React, { useState } from 'react'
import genreIds from '../../utility/GenreNames'

const Watchlist = ({watchlist, setWatchList}) => {

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const sortByAscendingOrder = () => {
    let sortedByIncreasing =  watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedByIncreasing])
  }

  const sortByDescendingOrder = () => {
    let sortedByDecresing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedByDecresing])
  }

  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        <div className='flex justify-center h-[2.5rem] w-[6rem] bg-blue-400 rounded-xl text-white font-medium items-center mx-2'>
          Action
        </div>
        <div className='flex justify-center h-[2.5rem] w-[6rem] bg-gray-400/50 rounded-xl text-white font-medium items-center mx-2'>
          Action
        </div>
      </div>

      <div className='flex justify-center my-8'>
        <input 
          onChange={handleSearch}
          value={search}
          type="text" 
          placeholder='Search movies' 
          className='h-[3rem] w-[18rem] bg-gray-300 outline-none px-4 text-base text-black rounded-lg' 
        />
      </div>

      <div className='border border-gray-100 m-6 overflow-hidden rounded-lg'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr className='h-10'>
              <th>Name</th>
              <th className='flex justify-center'>
                <span onClick={sortByAscendingOrder} className='p-2 hover:cursor-pointer'>
                  <i className="fa-solid fa-arrow-up"></i>
                </span>
                <span className='p-2'>Ratings</span>
                <span onClick={sortByDescendingOrder} className='p-2 hover:cursor-pointer'>
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {watchlist.filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj, index) => {
              return (
                <tr key={index} className='border-b-2'>
                  <td className='flex items-center px-4 py-2'>
                    <img className='h-[5rem] w-[8rem] bg-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt={movieObj.title} />
    
                    <div className='mx-10'>
                      {movieObj.title}
                    </div>
                  </td>
    
                  <td> {movieObj.vote_average.toFixed(1)} </td>
                  <td> {movieObj.popularity.toFixed(2)} </td>
                  <td> {genreIds[movieObj.genre_ids[0]]} </td>
    
                  <td className='text-red-700'>Delete</td>
                </tr>
              )
            })}


          </tbody>

        </table>
      </div>

    </>
    
  )
}

export default Watchlist