import React from "react";
import { Link, useLocation } from "react-router-dom";
import movieIcon from "../../assets/movie_icon.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex border-2 space-x-6 items-center pl-4 py-3">
      <img src={movieIcon} alt="movieIcon" className="w-[35px]" />
      <Link
        to="/"
        className={`px-4 py-2 text-lg font-semibold relative
          ${
            location.pathname === "/"
              ? "text-blue-500"
              : "text-gray-500"
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
              : "text-gray-500"
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
