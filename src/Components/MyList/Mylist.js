import React from "react";
import "./MyList.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Mylist(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const favMovie = location.state || [];
  const selectedMovieDetails = favMovie.selectedMovieDetails || [];
  console.log("ddd", selectedMovieDetails);

  return (
    <div className="Maincontainer">
      <div className="navContainer">
        <button className="btn btn-light btnHome">Home</button>
      </div>
      <div className="fav">
        <h1>My Favorites</h1>
      </div>

      <div className="cardesigns">
        {selectedMovieDetails.map((movie) => (
          <div className="card">
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">title</h5>
              <p className="card-text">overview</p>
              <button
                onClick={() => navigate("/Home")}
                className="btn btn-primary"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mylist;
