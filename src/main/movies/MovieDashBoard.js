import React from "react";
import Zoom from "react-reveal/Zoom";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function MovieDashboard(props) {
  const { movieData } = props;
  return (
    <div className="show-wrapper">
      <div className="show">
        {movieData.map((v, i) => {
          return (
            <Zoom key={i + 'movies'}>
              <div className="image-wrapper">
              <img
                    src={
                      v.poster_path
                        ? baseMovieUrl + v.poster_path
                        : v.backdrop_path
                        ? baseMovieUrl + v.backdrop_path
                        : altUrl
                    }
                    alt = {v.title}
                  />
                <p className="title"> Title: {v.title}</p>
                <p className="rating">{v.vote_average}/10</p>
                <p className="release-date">Release Date: {v.release_date}</p>
                <p className = "link"> More: <a href = "#"> 🔗 </a></p>

              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
}

export default MovieDashboard;
