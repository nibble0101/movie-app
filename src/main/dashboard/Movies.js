import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
// const movieUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
function Movies(props) {
//   const { generalConfig, data } = useContext(context);
  const [movies, setMovies] = React.useState(null);
  const [genreId, setGenreId] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  React.useEffect(() => {
    const genre = genreId === null ? "" : "&with_genres=" + genreId;
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&page=" +
      pageNumber +
      genre;
      const fetchData = async () => {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => setMovies(data));
      };
      fetchData();
  }, [genreId, pageNumber]);
  return (
    <div className="show-wrapper">
      <h1> Movies </h1>
      <div className="show">
        {movies &&
          movies.results.map((v, i) => {
            return (
              <Zoom key={Math.random()}>
                <img src={baseMovieUrl + v.backdrop_path} />
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default Movies;
