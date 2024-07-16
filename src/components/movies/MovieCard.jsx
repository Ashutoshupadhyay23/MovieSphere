import { Button, Tooltip } from '@material-tailwind/react';
import React from 'react';

const sorterName = (str, maxWords) => {
  const words = str.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
  }
  return str;
};

const MovieCard = ({ poster_path, name, handleAddToWatchlist, movieObj, handleRemoveFromWatchlist, watchlist }) => {
  
  const sortName = sorterName(name, 4);

  function doesContain (movieObj) {
    for(let i=0; i<watchlist.length; i++){
      if(watchlist[i].id == movieObj.id){
        return true
      }
    }
    return false
  }

  return (
    <div className='relative h-[40vh] w-[150px] bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      {doesContain(movieObj) ? (
        <div className="absolute top-0 right-0 mt-1 mr-1">
          <Tooltip
            content="Remove from Watchlist"
            className="text-xs text-gray-800 bg-gray-200 bg-opacity-75 p-1 rounded"
            effect="solid"
          >
            <div 
              onClick={() => (handleRemoveFromWatchlist(movieObj))}
              className="bg-gray-900/60 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer shadow-lg"
            >
              <span>&#10060;</span>
            </div>
          </Tooltip>
        </div> 
       ) : ( 
          <div className="absolute top-0 right-0 mt-1 mr-1">
            <Tooltip
              content="Add to Watchlist"
              className="text-xs text-gray-800 bg-gray-200 bg-opacity-75 p-1 rounded"
              effect="solid"
            >
              <div 
                onClick={() => (handleAddToWatchlist(movieObj))}
                className="bg-gray-900/60 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer shadow-lg"
              >
                <span>&#128525;</span>
              </div>
            </Tooltip>
          </div>
        )
      }

      
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-sm text-center rounded-b-xl'>
        {sortName}
      </div>
    </div>
  );
};

export default MovieCard;
