import React, { useState, useEffect } from "react";
import MovieDashBoard from "./MovieDashBoard";
import MoviePagination from "../Pagination";
import Loader from "../Loader";
import MovieSearch from "./MovieSearch";
import SearchResult from "./SearchResult";
import HomeIcon from "../HomeIcon";
import { useLocation, Redirect } from "react-router-dom";
import { parseQueryString } from "../../utils/utils";
import "../../styles/Footer.css";

const baseUrl = "https://api.themoviedb.org/3";

const movieUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
const queryUrl = `${baseUrl}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;

export default function MovieDisplay(props) {
  const [movieData, setMovieData] = useState([]);
  const [queriedMovieData, setQueriedMovieData] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState({ hasError: false, errorMessage: "" });
  const { genre, genreId } = parseQueryString(useLocation().search);

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
    const url = `${movieUrl}&page=${moviePage}&with_genres=${genreId}`;
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await fetch(url).then((response) => response.json());
        if (movies.results) {
          setMovieData(movies.results);
          setTotalPages(movies.total_pages);
          return;
        }
        setError({
          hasError: true,
          message: "Failed to fetch movies from database",
        });
      } catch (error) {
        setError({ hasError: true, message: "Unknown error has occurred" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [moviePage, genreId]);

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

  if (!genre || !genreId) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { message: "Missing genre or genre id" },
        }}
      />
    );
  }
  if (error.hasError) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { message: error.message },
        }}
      />
    );
  }
  if (!movieData.length) {
    return <Loader />;
  }
  return (
    <>
      <HomeIcon url="/" />
      <MovieSearch
        value={value}
        changeHandle={changeHandle}
        submitHandle={submitHandle}
      />
      {value !== "" ? (
        <SearchResult
          movieData={query ? queriedMovieData : movieData}
          isLoading={isLoading}
          genreId={genreId}
          name={genre}
          value={value}
        />
      ) : null}
      {value === "" ? (
        <MovieDashBoard
          movieData={movieData}
          isLoading={isLoading}
          genreId={genreId}
          name={genre}
          
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
