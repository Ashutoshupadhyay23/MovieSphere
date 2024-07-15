import React from "react";
import { Link, useLocation } from "react-router-dom";
import movieIcon from "../../assets/movie_icon.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex space-x-6 items-center pl-4 py-3 sticky top-0 bg-gray-800 text-white z-10">
      <img src={movieIcon} alt="movieIcon" className="w-[35px]" />
      <Link
        to="/"
        className={`px-4 py-2 text-lg font-semibold relative
          ${
            location.pathname === "/"
              ? "text-blue-500"
              : "text-white"
          }`
        }
      >
        Movies
        {location.pathname === "/" && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
        )}
      </Link>
      <Link
        to="/watchlist"
        className={`px-4 py-2 text-lg font-semibold relative
          ${
            location.pathname === "/watchlist"
              ? "text-blue-500"
              : "text-white"
          }`
        }
      >
        Watchlist
        {location.pathname === "/watchlist" && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
