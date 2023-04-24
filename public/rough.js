<div className="container">
<div className="container1">
  <button id="hh" name="hhh" type="button" className="button" onClick={()=>navigate("/Home")}>
    Home
  </button>
</div>
<div className="hero">
  <div className="container2">
    <h1 className="text">{detailMovie.title}</h1>
    <span className="text1">
      {detailMovie.overview}
      
    </span>
    
    <div className="btn-group"></div>
  </div>
  <div className="imgwork">
  <img
    alt="image"
    src={`${imageUrl + detailMovie.backdrop_path}`}
    className="image"
  />
  </div>
  <button className="button">Button</button>
</div>
<div className="container3"></div>
<div>
  <Outlet />
</div>
</div>