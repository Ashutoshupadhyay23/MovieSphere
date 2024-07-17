import React, { useEffect, useState } from 'react';
import genreIds from '../../utility/GenreNames';

const Watchlist = ({ watchlist, setWatchList }) => {
  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortByAscendingOrder = () => {
    let sortedByIncreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList(sortedByIncreasing);
  };

  const sortByDescendingOrder = () => {
    let sortedByDecresing = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList(sortedByDecresing);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const handleDelete = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchList(updatedWatchlist);

    localStorage.setItem('movieLists', JSON.stringify(updatedWatchlist));
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(['All Genres', ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleFilter(genre)}
            className={`flex justify-center h-[2.5rem] w-[6rem] rounded-xl text-white font-medium items-center mx-2 hover:cursor-pointer ${currGenre === genre ? 'bg-blue-400' : 'bg-gray-400/50'
              }`}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className='flex justify-center my-8'>
        <input
          onChange={handleSearch}
          value={search}
          type='text'
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
                  <i className='fa-solid fa-arrow-up'></i>
                </span>
                <span className='p-2'>Ratings</span>
                <span onClick={sortByDescendingOrder} className='p-2 hover:cursor-pointer'>
                  <i className='fa-solid fa-arrow-down'></i>
                </span>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre === 'All Genres') {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] === currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movieObj, index) => (
                <tr key={index} className='border-b-2'>
                  <td className='flex items-center px-4 py-2'>
                    <img
                      className='h-[5rem] w-[8rem] bg-cover rounded-md'
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                    <div className='mx-10'>{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average.toFixed(1)}</td>
                  <td>{movieObj.popularity.toFixed(2)}</td>
                  <td>{genreIds[movieObj.genre_ids[0]]}</td>

                  <td className='text-red-700'>
                    <i className="fa-duotone fa-solid fa-trash hover:cursor-pointer"
                      onClick={() => handleDelete(movieObj.id)}>

                    </i>
                  </td>

                </tr>
              ))}

            {watchlist.length === 0 && (
              <tr>
                <td colSpan='5' className='text-center py-4'>
                  No data found.
                </td>
              </tr>
            )}

            {watchlist.filter((movieObj) =>
              movieObj.title.toLowerCase().includes(search.toLowerCase())
            ).length === 0 && search.length > 0 && (
                <tr>
                  <td colSpan='5' className='text-center py-4'>
                    No movies found matching "{search}".
                  </td>
                </tr>
              )}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;