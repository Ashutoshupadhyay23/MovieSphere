import React from 'react';

const sorterName = (str, maxWords) => {
  const words = str.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
  }
  return str;
};

const MovieCard = ({ poster_path, name }) => {
  
  const sortName = sorterName(name, 4);

  return (
    <div className='relative h-[40vh] w-[150px] bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>
      
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-sm text-center rounded-b-xl'>
        {sortName}
      </div>
    </div>
  );
};

export default MovieCard;
