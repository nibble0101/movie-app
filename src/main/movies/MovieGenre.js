import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
function MovieGenre(props) {
  const { movieGenreList, resetPage } = props;
  const btnRef = useRef();
  const genreRef = useRef();
  const [genre, setGenre] = useState("All");
  const genreHandle = (e) => {
    setGenre(e.target.innerText);
  };
  const panelHandle = (e) => {
    if (genreRef.current.style.maxHeight) {
      genreRef.current.style.maxHeight = null;
      btnRef.current.innerHTML = "&#9660;"
      
    } else {
      genreRef.current.style.maxHeight = genreRef.current.scrollHeight + "px";
      btnRef.current.innerHTML = "&#9650;"
    }
  };
  return (
    <React.Fragment>
      <p className="show-title">
        <span className="movie-main-title"> Movies </span>
        <span className="genre-name"> {genre} </span>
        <button ref={btnRef} onClick={panelHandle} className="arrow-btn">
          &#9660;
        </button>
      </p>
      <div className="genre-wrapper" ref={genreRef}>
        <section className="genres">
          <button
            key="0genres"
            onClick={(e) => {
              resetPage(e);
              genreHandle(e);
            }}
          >
            <Link to={{ pathname: "/movies/all", state: { genreId: 0 } }}>
              All
            </Link>
          </button>
          {movieGenreList.map((v) => {
            return (
              <button
                key={v.id + 1 + "genres"}
                onClick={(e) => {
                  resetPage(e);
                  genreHandle(e);
                  panelHandle(e)
                }}
              >
                <Link
                  to={{
                    pathname: `/movies/${v.name.replace(/\s+/g, "")}`,
                    state: { genreId: v.id },
                  }}
                >
                  {v.name}
                </Link>
              </button>
            );
          })}
        </section>
      </div>
    </React.Fragment>
  );
}

export default MovieGenre;
