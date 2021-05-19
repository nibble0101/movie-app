import React, { useReducer, useEffect } from "react";
import SearchBar from "../SearchBar";
import Loader from "../Loader";
import TvDashBoard from "./TvDashBoard";
import TvSearchResults from "./TvSearchResults";
import HomeIcon  from "../HomeIcon";
import Pagination from "../Pagination";
import { parseQueryString } from "../../utils/utils";
import { useLocation, Redirect } from "react-router-dom";

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
  tvReducer,
} from "../reducers/tvReducer";

const baseUrl = "https://api.themoviedb.org/3";

const tvShowUrl = `${baseUrl}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`;
const queryTvShowUrl = `${baseUrl}/search/tv?api_key=${process.env.REACT_APP_API_KEY}`;

function TvDisplay() {
  const [state, dispatch] = useReducer(tvReducer, initialState);
  const { genre, genreId } = parseQueryString(useLocation().search);

  const changeHandle = (event) => {
    dispatch({ type: SET_VALUE, value: event.target.value });
    if (state.error.hasError) {
      dispatch({ type: SET_ERROR, error: { hasError: false, message: "" } });
    }
    if (state.query) {
      dispatch({ type: SET_QUERY, query: "" });
      dispatch({ type: SET_SEARCH_DATA, searchData: [] });
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
    dispatch({ type: SET_PAGE, page });
  };

  useEffect(() => {
    const url = `${tvShowUrl}&with_genres=${genreId}&page=${state.page}`;
    async function fetchData() {
      try {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: true });
        const tvShows = await fetch(url).then((response) => response.json());
        if (!tvShows.results) {
          dispatch({
            type: SET_ERROR,
            error: {
              hasError: true,
              message: "Failed to fetch TV shows at the moment",
            },
          });
          return;
        }
        dispatch({ type: SET_DATA, data: tvShows.results });
        dispatch({ type: SET_TOTAL_PAGE, totalPage: tvShows.total_pages });
      } catch (error) {
        dispatch({
          type: SET_ERROR,
          error: {
            hasError: true,
            message: error.message,
          },
        });
      } finally {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: false });
      }
    }
    fetchData();
  }, [state.page, genreId]);

  useEffect(() => {
    if (!state.query) {
      return;
    }
    const url = `${queryTvShowUrl}&query=${encodeURI(
      state.query
    )}&with_genres=${genreId}`;
    async function fetchData() {
      try {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: true });
        const searchedTvShows = await fetch(url).then((response) =>
          response.json()
        );
        if (!searchedTvShows.results) {
          dispatch({
            type: SET_ERROR,
            error: { hasError: true, message: "Failed to fetch TV shows" },
          });
          return;
        }
        dispatch({
          type: SET_SEARCH_DATA,
          searchData: searchedTvShows.results,
        });
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
      <HomeIcon url="/tv" />
      <SearchBar
        value={state.value}
        placeholder="Enter TV show title"
        changeHandle={changeHandle}
        submitHandle={submitHandle}
      />
      {state.value === "" ? (
        <TvDashBoard
          tvData={state.data}
          genre={genre}
          genreId={genreId}
          isLoading={state.isLoading}
        />
      ) : (
        <TvSearchResults
          tvData={state.query ? state.searchData : state.data}
          genre={genre}
          genreId={genreId}
          isLoading={state.isLoading}
          value={state.value}
        />
      )}
      {state.value === "" ? (
        <Pagination
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
export default TvDisplay;
