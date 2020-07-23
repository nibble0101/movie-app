import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
function MovieGenre(props) {
  const { movieGenreList, resetPage } = props;
  return (
    <Zoom>
      <section className="genres">
        <button key="0genres" onClick={resetPage}>
          <Link to={{ pathname: "/movies/all", state: { genreId: 0 } }}>
            All
          </Link>
        </button>
        {movieGenreList.map((v) => {
          return (
            <button key={v.id + 1 + "genres"} onClick={resetPage}>
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
    </Zoom>
  );
}

export default MovieGenre;
