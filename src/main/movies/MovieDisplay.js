import React, { useState, useEffect, useCallback } from "react";
import MovieTitle from "./MovieTitle";
import MovieSearch from "./MovieSearch";
import MovieGenre from "./MovieGenre";
import MovieDashBoard from "./MovieDashBoard";
import MoviePages from "./MoviePages";
import Loader from "../Loader";

const movieUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  process.env.REACT_APP_API_KEY;
const genreUrl =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  process.env.REACT_APP_API_KEY;

export default function MovieDisplay() {
  const [movieData, setMovieData] = useState([]);
  const [movieGenre, setMovieGenre] = useState(0);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [queryText, setQueryText] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const previousPageHandler = useCallback(
    (e) => {
      if (moviePage === 1) {
        return;
      }
      setMoviePage((prevPage) => prevPage - 1);
    },
    [moviePage]
  );
  const nextPageHandler = useCallback(
    (e) => {
      if (moviePage === totalPages) {
        return;
      }
      setMoviePage((prevPage) => prevPage + 1);
    },
    [moviePage, totalPages]
  );
  const genreClickHandler = useCallback((e) => {
    const len = e.target.length;
    let genreId;
    for (let i = 0; i < len; i++) {
      if (e.target.value === e.target[i].value) {
        genreId = +e.target[i].id;
        break;
      }
    }
    setMovieGenre(genreId);
  }, []);
  useEffect(() => {
    setIsLoading(true)
    const genre = movieGenre === 0 ? "" : "&with_genres=" + movieGenre;
    const url = movieUrl + "&page=" + moviePage + genre;
    async function fetchData() {
      const movies = await fetch(url).then((response) => response.json());
      setMovieData(movies.results);
      setTotalPages(movies.total_pages);
      setIsLoading(false)
    }
    fetchData();
  }, [moviePage, queryText, movieGenre]);
  useEffect(() => {
    async function fetchGenre() {
      const genre = await fetch(genreUrl).then((response) => response.json());
      setMovieGenreList(genre.genres);
    }
    fetchGenre();
  }, []);
  return (
    <React.Fragment>
      <MovieTitle />
      <MovieGenre
        movieGenreList={movieGenreList}
        genreClickHandler={genreClickHandler}
      />
      <MovieSearch />
      <MovieDashBoard movieData={movieData} />
      <MoviePages
          moviePage={moviePage}
          totalPages={totalPages}
          nextPageHandler={nextPageHandler}
          previousPageHandler={previousPageHandler}
        />
      {!movieData.length && isLoading && <Loader />}
    </React.Fragment>
  );
}
