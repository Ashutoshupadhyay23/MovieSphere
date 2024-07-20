import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [posters, setPosters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchPosters();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [posters]);

  const fetchPosters = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US`)
      .then((res) => {
        const fetchedPosters = res.data.results.map((movie) => ({
          title: movie.title,
          backdropPath: movie.backdrop_path,
        }));
        setPosters(fetchedPosters);
      })
      .catch((error) => {
        console.error('Error fetching movie posters:', error);
      });
  };

  if (posters.length === 0) {
    return null; // Render nothing if posters are not fetched yet
  }

  const currentPoster = posters[currentIndex];
  const backgroundImage = `https://image.tmdb.org/t/p/original${currentPoster.backdropPath}`;
  

  return (
    <div className='relative h-[30vh] md:h-[70vh] overflow-hidden rounded-sm z-0'>
      <div
        className='absolute inset-0 bg-cover bg-center z-10 transition-opacity duration-500 ease-in-out'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 1,
        }}
      ></div>
      <div className='absolute inset-0 bg-gray-900/60 z-20 flex items-end'>
        <div className='text-white text-xl text-center w-full p-2'>{currentPoster.title}</div>
      </div>
    </div>
  );
};

export default Banner;
