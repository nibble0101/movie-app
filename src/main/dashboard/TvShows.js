import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import {context} from "../../store/ContextProvider";
const url = "https://image.tmdb.org/t/p/w300/";

function TVShows(props) {
    // const { generalConfig, data } = useContext(context);
  const [tvShows, setTvShows] = React.useState(null);
  const [genreId, setGenreId] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  React.useEffect(() => {
    const genre = genreId === null ? "" : "&with_genres=" + genreId;
    const url =
    "https://api.themoviedb.org/3/discover/tv?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&page=" +
      pageNumber +
      genre;
      const fetchData = async () => {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => setTvShows(data));
      };
      fetchData();
  }, [genreId, pageNumber]);
    return (
        <div className="show-wrapper">
          <h1> Tv Shows </h1>
          <div className="show">
            {tvShows &&
              tvShows.results.map((v, i) => {
                return (
                  <Zoom>
                    <img src={url + v.backdrop_path} key={"image" + i} />
                  </Zoom>
                );
              })}
          </div>
        </div>
      );
}

export default TVShows;