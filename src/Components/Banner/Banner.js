import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Constants/Constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

function Banner() {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [bannerMovies, setBannerMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        setBannerMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex(
        (currentMovieIndex) => (currentMovieIndex + 1) % bannerMovies.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerMovies.length]);

  const currentBannerMovie = bannerMovies[currentMovieIndex];

  return (
    <div
      style={{
        backgroundImage: `url(${
          currentBannerMovie ? imageUrl + currentBannerMovie.backdrop_path : ""
        })`,
      }}
      className="lg-1 banner"
    >
      <div className="content">
        <h1 className="title">
          {currentBannerMovie ? currentBannerMovie.title : ""}
        </h1>

        <h1 className="description">
          {currentBannerMovie ? currentBannerMovie.overview : ""}
        </h1>
      </div>
      <div className=" viewButton">
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/detailsPage/${currentBannerMovie.id}`)}
        >
          VIEW
        </button>
      </div>
    </div>
  );
}

export default Banner;
