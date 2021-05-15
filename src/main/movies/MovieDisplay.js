import React, { useEffect, useReducer } from "react";
import MovieDashBoard from "./MovieDashBoard";
import MoviePagination from "../Pagination";
import Loader from "../Loader";
import SearchBar from "../SearchBar";
import SearchResult from "./SearchResult";
import HomeIcon from "../HomeIcon";
import { useLocation, Redirect } from "react-router-dom";
import { parseQueryString } from "../../utils/utils";
import "../../styles/Footer.css";

import {
  SET_DATA,
  SET_SEARCH_DATA,
  SET_PAGE,
  SET_TOTAL_PAGE,
  SET_LOADING_INDICATOR,
  SET_VALUE,
  SET_QUERY,
  SET_ERROR,
  initialState,
  movieReducer,
} from "../reducers/movieReducer";

const baseUrl = "https://api.themoviedb.org/3";

const movieUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
const queryUrl = `${baseUrl}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;

export default function MovieDisplay(props) {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const { genre, genreId } = parseQueryString(useLocation().search);

  const changeHandle = (event) => {
    dispatch({ type: SET_VALUE, value: event.target.value });
    if (state.error.hasError) {
      dispatch({ type: SET_ERROR, error: { hasError: false, message: "" } });
    }
    if(state.query){
      dispatch({ type: SET_QUERY, query: ""});
      dispatch({ type: SET_SEARCH_DATA, searchData: []});
    }
  };
  const submitHandle = (event) => {
    event.preventDefault();
    if (!state.value) {
      alert("Please enter name of personality before submitting");
      return;
    }
    dispatch({ type: SET_QUERY, query: state.value });
  };

  const pageHandler = (page) => {
    console.log(page)
    dispatch({ type: SET_PAGE, page });
  };

  useEffect(() => {
    const url = `${movieUrl}&page=${state.page}&with_genres=${genreId}`;
    async function fetchMovies() {
      try {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: true });
        const movies = await fetch(url).then((response) => response.json());
        if (!movies.results) {
          dispatch({
            type: SET_ERROR,
            error: { hasError: true, message: "Failed to fetch data" },
          });
          return;
        }
        dispatch({ type: SET_DATA, data: movies.results });
        dispatch({ type: SET_TOTAL_PAGE, totalPage: movies.total_pages });
      } catch (error) {
        dispatch({
          type: SET_ERROR,
          error: { hasError: true, message: error.message },
        });
      } finally {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: false });
      }
    }
    fetchMovies();
  }, [state.page, genreId]);

  useEffect(() => {
    if (!state.query) {
      return;
    }
    const url = `${queryUrl}&query=${encodeURI(state.query)}&with_genres=${genreId}`;
    async function fetchData() {
      try {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: true });
        const searchedMovies = await fetch(url).then((response) =>
          response.json()
        );
        if (!searchedMovies.results) {
          dispatch({
            type: SET_ERROR,
            error: { hasError: true, message: "Failed to fetch data" },
          });
          return;
        }
        dispatch({ type: SET_SEARCH_DATA, searchData: searchedMovies.results });
      } catch (error) {
        dispatch({
          type: SET_ERROR,
          error: { hasError: true, message: error.message },
        });
      } finally {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: false });
      }
    }
    fetchData();
  }, [state.query, genreId]);

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
  if (state.error.hasError) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { message: state.error.message },
        }}
      />
    );
  }
  if (!state.data.length) {
    return <Loader />;
  }
  return (
    <>
      <HomeIcon url="/" />
      <SearchBar
        value={state.value}
        placeholder="Enter movie title"
        changeHandle={changeHandle}
        submitHandle={submitHandle}
      />
      {state.value === "" ? (
        <MovieDashBoard
          movieData={state.data}
          isLoading={state.isLoading}
          genreId={genreId}
          genre={genre}
        />
      ) : (
        <SearchResult
          movieData={state.query ? state.searchData : state.data}
          isLoading={state.isLoading}
          genreId={genreId}
          genre={genre}
          value={state.value}
        />
      )}
      {state.value === "" ? (
        <MoviePagination
          activePage={state.page}
          itemsCountPerPage={20}
          totalItemsCount={state.totalPage * 20}
          pageRangeDisplayed={2}
          pageChangeHandler={pageHandler}
        />
      ) : null}
    </>
  );
}
