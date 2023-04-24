import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../Constants/Constants";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

const imageUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetails(props) {
  const location = useLocation();
  const dataState = location.state || {};
  const genres = dataState.categoryData || {};
  const navigate = useNavigate();
  const [categoryMovies, setCategoryMovies] = useState([]);

  useEffect(() => {
    async function getCategoryMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.id}`
      );
      setCategoryMovies(response.data.results);
    }
    getCategoryMovies();
  }, []);

  return (
    <>
      <div className="main">
        <h1>{genres.name} Movies</h1>
        <div className="d-flex flex-wrap cardDesigns">
          {categoryMovies.map((movie) => (
            <div
              className="card mx-auto"
              key={movie.id}
              style={{ width: "18rem", maxHeight: "500px" }}
            >
              <img
                src={`${imageUrl}${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Language: {movie.original_language}</p>
                <p className="card-text">Release Date: {movie.release_date}</p>
                <p className="card-text">Rating: {movie.vote_average}</p>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={() => navigate(`/detailsPage/${movie.id}`)}
                >
                  VIEW
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
