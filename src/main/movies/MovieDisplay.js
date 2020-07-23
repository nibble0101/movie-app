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

export default function MovieDisplay(props) {
  const { state } = props.location;
  const [movieData, setMovieData] = useState([]);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [queryText, setQueryText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const lastPageHandler = useCallback(
    (e) => {
      if (moviePage === totalPages) {
        return;
      }
      setMoviePage(totalPages);
    },
    [moviePage, totalPages]
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
  const firstPageHandler = useCallback(
    (e) => {
      if (moviePage === 1) {
        return;
      }
      setMoviePage(1);
    },
    [moviePage]
  );
  const previousPageHandler = useCallback(
    (e) => {
      if (moviePage === 1) {
        return;
      }
      setMoviePage((prevPage) => prevPage - 1);
    },
    [moviePage]
  );

  const resetPage = useCallback((e) => {
    setMoviePage(1);
  });

  useEffect(() => {
    const movieGenre = +state.genreId;
    const genre = movieGenre === 0 ? "" : "&with_genres=" + movieGenre;
    const url = movieUrl + "&page=" + moviePage + genre;
    async function fetchMovies() {
      const movies = await fetch(url).then((response) => response.json());
      setMovieData(movies.results);
      setTotalPages(movies.total_pages);
    }
    fetchMovies();
  }, [moviePage, queryText, state.genreId]);

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
      <MovieGenre movieGenreList={movieGenreList} resetPage = {resetPage} />
      <MovieSearch />
      <MovieDashBoard movieData={movieData} />
      <MoviePages
        moviePage={moviePage}
        totalPages={totalPages}
        firstPageHandler = {firstPageHandler}
        nextPageHandler={nextPageHandler}
        previousPageHandler={previousPageHandler}
        lastPageHandler = {lastPageHandler}
      />
      {!movieData.length && isLoading && <Loader />}
    </React.Fragment>
  );
}
