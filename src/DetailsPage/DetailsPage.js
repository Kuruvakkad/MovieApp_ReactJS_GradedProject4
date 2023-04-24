import React from "react";
import "./DetailsPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../Constants/Constants";
import { useNavigate, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [youid, setYouId] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setDetailMovie(response.data);
      });
  }, [id]);
  const handleMovie = (detailMovie) => {
    console.log(detailMovie.id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${detailMovie.id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          setYouId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="maincontainer">
      <div className="headbar">
        <button
          id="hh"
          name="hhh"
          type="button"
          className="button"
          onClick={() => navigate("/Home")}
        >
          Home
        </button>
      </div>
      <div className="subcontainer">
        <div className="right">
          <h1 className="titledesign">{detailMovie.title}</h1>
          <h2>
            <b>Overview:{detailMovie.overview}</b>
          </h2>
          <br></br>
          <h2>Release Date:{detailMovie.release_date}</h2>
          <h2>Rating:{detailMovie.vote_average}</h2>
        </div>
        <div className="left">
          <img
            alt="image"
            src={`${imageUrl + detailMovie.backdrop_path}`}
            className="image"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
