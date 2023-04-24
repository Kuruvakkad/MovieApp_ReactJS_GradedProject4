import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Mylist from "./MyList/Mylist";
import MovieDetails from './MovieDetails/MovieDetails'
import DetailsPage from "../DetailsPage/DetailsPage";


function AppRouter() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/Home" element={<App/>}></Route>
          <Route path="/mylist" element={<Mylist />}></Route>
          <Route path="/movie/:genreId" element={<MovieDetails/>} />
          <Route path="/detailsPage/:id" element={<DetailsPage />}/>



        </Routes>
      </Router>
    </div>
    
  );
}

export default AppRouter;
