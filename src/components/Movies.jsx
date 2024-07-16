import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies(pageNo);
  }, [pageNo]);

  const fetchMovies = (page) => {
    setLoading(true);
    setError(null);
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eb1cc76a6cbe2625542a78deed514da1&language=en-US&page=${page}`)
      .then(function (res) {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch(function (error) {
        console.error('Error fetching movies:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    if (pageNo < totalPages) {
      setPageNo(pageNo + 1);
    }
  };

  return (
    <div className='p-5'>
      <div className='text-2xl font-bold mx-auto my-5'>
        Popular Movies
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center mt-4">
          Error fetching movies. Please try again later.
        </div>

      ) : (
        <div>
          <div className='flex flex-row flex-wrap justify-evenly gap-2'>
            {movies.map((movieObj) => (
              <div key={movieObj.id} className="mb-3">
                <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title} />
              </div>
            ))}
          </div>

          <Pagination
            pageNo={pageNo}
            totalPages={totalPages}
            handlePrev={handlePrev}
            handleNext={handleNext}
            loading={loading}
          />
        </div>
      )}
    </div>
  );
};

export default Movies;