import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function TvGenre(props) {
    const { tvGenreList, resetPage } = props;
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
          <span className="movie-main-title"> Tv Shows </span>
          <span className="genre-name"> {genre} </span>
          <button ref={btnRef} onClick={panelHandle} className="arrow-btn">
            &#9660;
          </button>
        </p>
        <div className="genre-wrapper" ref={genreRef}>
          <section className="genres">
            <button
              key="0genrestvshow"
              onClick={(e) => {
                resetPage(e);
                genreHandle(e);
              }}
            >
              <Link to={{ pathname: "/tvshows/all", state: { genreId: 0 } }}>
                All
              </Link>
            </button>
            {tvGenreList.map((v) => {
              return (
                <button
                  key={v.id + 1 + "tv-genres"}
                  onClick={(e) => {
                    resetPage(e);
                    genreHandle(e);
                    panelHandle(e)
                  }}
                >
                  <Link
                    to={{
                      pathname: `/tvshows/${v.name.replace(/\s+/g, "")}`,
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

export default TvGenre;
