import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

const Movies = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eb1cc76a6cbe2625542a78deed514da1&language=en-US&page=1`).then(function(res) {
      setMovies(res.data.results);
    })
  }, [])

  return (
    <div className='p-5'>
      <div className='text-2xl font-bold mx-auto my-5'>
        Popular Movies
      </div>

      <div className='flex flex-row flex-wrap justify-evenly gap-3'>
        
        {movies.map((movieObj) => {
          return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title} />
        })}

      </div>

    </div>
  )
}

export default Movies