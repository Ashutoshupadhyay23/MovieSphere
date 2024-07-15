import React from 'react';

const MovieCard = ({ poster_path, name }) => {
  return (
    <div className='relative h-[40vh] w-[150px] bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>
      
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-lg text-center rounded-b-xl'>
        {name}
      </div>
    </div>
  );
};

export default MovieCard;


// https://api.themoviedb.org/3/movie/popular?api_key=eb1cc76a6cbe2625542a78deed514da1&language=en-US&page=1