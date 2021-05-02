import React, { useState, useEffect } from "react";
import MovieDashBoard from "./MovieDashBoard";
import MoviePages from "./MoviePages";
import Loader from "../Loader";
import MovieSearch from "./MovieSearch";
import SearchResult from "./SearchResult";
import { useLocation } from "react-router-dom";

const baseUrl = "https://api.themoviedb.org/3";

const movieUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
const queryUrl = `${baseUrl}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;

export default function MovieDisplay() {
  const [movieData, setMovieData] = useState([]);
  const [queriedMovieData, setQueriedMovieData] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const {
    state: { id, name },
  } = useLocation();

  const lastPageHandler = () => {
    if (moviePage === totalPages) {
      return;
    }
    setMoviePage(totalPages);
  };

  const nextPageHandler = () => {
    if (moviePage === totalPages) {
      return;
    }
    setMoviePage((prevPage) => prevPage + 1);
  };
  const firstPageHandler = () => {
    if (moviePage === 1) {
      return;
    }
    setMoviePage(1);
  };
  const previousPageHandler = () => {
    if (moviePage === 1) {
      return;
    }
    setMoviePage((prevPage) => prevPage - 1);
  };

  const changeHandle = (event) => {
    setValue(event.target.value);
    if(query || queriedMovieData.length ){
      setQuery("");
      setQueriedMovieData([]);
    }
  };
  const submitHandle = (event) => {
    event.preventDefault();
    if (!value) {
      alert("Enter movie title");
      return;
    }
    setQuery(value);
  };

  useEffect(() => {
    const url = `${movieUrl}&page=${moviePage}&with_genres=${id} `;
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await fetch(url).then((response) => response.json());
        setMovieData(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [moviePage, id]);

  useEffect(() => {
    if (!query) {
      return;
    }
    const url = `${queryUrl}&query=${encodeURI(query)}`;
    async function fetchData() {
      try {
        setIsLoading(true);
        const searchedMovies = await fetch(url).then((response) =>
          response.json()
        );
        setQueriedMovieData(searchedMovies.results);
      } catch (error) {
        console.log(`Error: ${error.name}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  if (!movieData.length) {
    return <Loader />;
  }

  return (
    <>
      <MovieSearch
        value={value}
        changeHandle={changeHandle}
        submitHandle={submitHandle}
      />
      {value !== "" ? (
        <SearchResult
          movieData={query ? queriedMovieData : movieData}
          isLoading={isLoading}
          value={value}
          query={query}
        />
      ) : null}
      {value === "" ? (
        <MovieDashBoard
          movieData={movieData}
          id={id}
          name={name}
          isLoading={isLoading}
        />
      ) : null}
      {value === "" ? (
        <MoviePages
          moviePage={moviePage}
          totalPages={totalPages}
          firstPageHandler={firstPageHandler}
          nextPageHandler={nextPageHandler}
          previousPageHandler={previousPageHandler}
          lastPageHandler={lastPageHandler}
        />
      ) : null}
    </>
  );
}
