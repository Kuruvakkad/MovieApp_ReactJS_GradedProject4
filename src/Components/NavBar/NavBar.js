import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { API_KEY } from "../../Constants/Constants";
import axios from "axios";

function NavBar() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.genres);
      });
  }, []);
  const handleInput = (e) => {
    setQuery(e.target.value);
    console.log("result", e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
      )
      .then((response) => {
        console.log("sr", response.data.results);
        setSearchResult(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navBarSetting">
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ACTIONFLIX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/mylist" className="nav-link">
                  MyList
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  {movie.map((genres) => (
                    <li
                      key={genres.id}
                      onClick={() => {
                        navigate(`/movie/${genres.id}`, {
                          state: {
                            categoryData: genres,
                          },
                        });
                      }}
                    >
                      {genres.name}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form
              className="d-flex search"
              role="search"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleInput}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="search-results">
        <div className="result-container">
          {searchResult.map((result) => (
            <div
              className="result"
              key={result.id}
              className="search-result"
              onClick={() => navigate(`/detailsPage/${result.id}`)}
            >
              <img
                src={
                  `https://image.tmdb.org/t/p/w200${result.backdrop_path}` ||
                  `https://image.tmdb.org/t/p/w200${result.poster_path}`
                }
                alt={result.name}
              />
              <p>{result.title}</p>
              <p>{result.release_date}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
