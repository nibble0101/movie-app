import React, { useState, useEffect } from "react";
import MovieDashBoard from "./MovieDashBoard";
import MoviePagination from "../Pagination";
import Loader from "../Loader";
import MovieSearch from "./MovieSearch";
import SearchResult from "./SearchResult";
import { useLocation } from "react-router-dom";
import "../../styles/Footer.css";

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

  const changeHandle = (event) => {
    setValue(event.target.value);
    if (query || queriedMovieData.length) {
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
  const pageHandler = (page) => {
    setMoviePage(page);
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
        <MoviePagination
          activePage={moviePage}
          itemsCountPerPage={20}
          totalItemsCount={totalPages * 20}
          pageRangeDisplayed={2}
          pageChangeHandler={pageHandler}
        />
      ) : null}
    </>
  );
}
