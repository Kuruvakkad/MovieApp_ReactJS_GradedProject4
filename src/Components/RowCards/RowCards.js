import React, { useEffect, useState } from "react";
import "./RowCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, Route } from "react-router-dom";
import axios from "axios";

function RowCards(props) {
  const [movie, setMovie] = useState([]);
  const [selectedMovieIds, setSelectedMovieIds] = useState([]);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${props.urls}`).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    });
  }, []);

  const handleSelectMovie = (movieId) => {
    const index = selectedMovieIds.indexOf(movieId);
    if (index !== -1) {
      setSelectedMovieIds(selectedMovieIds.filter((id) => id !== movieId));
      setSelectedMovieDetails(
        selectedMovieDetails.filter((movie) => movie.id !== movieId)
      );
    } else {
      const selectedMovie = movie.find((movie) => movie.id === movieId);
      setSelectedMovieIds([...selectedMovieIds, movieId]);
      setSelectedMovieDetails([...selectedMovieDetails, selectedMovie]);
      console.log("nokk", selectedMovieDetails);
    }
  };
  const isMovieSelected = (movieId) => {
    return selectedMovieIds.includes(movieId);
  };

  return (
    <div className="row">
      <h2 className="head1">{props.title}</h2>
      <div className="posters">
        {movie &&
          movie.map((movie) => (
            <div key={movie.id} className="posterContainer">
              <Link to={`/detailsPage/${movie.id}`}>
                <img
                  className={props.isSmall ? "smallPoster" : "imgposter"}
                  src={`${imageUrl + movie.backdrop_path}`}
                  alt="poster"
                />
              </Link>

              <div className="textDesign">
                <div className="posterText">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={isMovieSelected(movie.id) ? "selected" : ""}
                    onClick={() => handleSelectMovie(movie.id)}
                  />

                  {movie.title}
                </div>

                <div className="rating">
                  Rating: <b>{movie.vote_average}</b>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RowCards;
