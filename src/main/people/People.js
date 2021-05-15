import React, { useReducer, useEffect } from "react";
import PeopleTitle from "./PeopleTitle";
import SearchBar from "../SearchBar";
import PeopleDashBoard from "./PeopleDashBoard";
import PeopleSearchResults from "./PeopleSearchResults";
import Pagination from "../Pagination";

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
  peopleReducer,
} from "../reducers/peopleReducer";

const peopleBaseUrl = "https://api.themoviedb.org/3/person/popular";
const peopleSearchBaseUrl = "https://api.themoviedb.org/3/search/person";

export default function PeopleDisplay() {
  const [state, dispatch] = useReducer(peopleReducer, initialState);

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
    const url = `${peopleBaseUrl}?api_key=${process.env.REACT_APP_API_KEY}&page=${state.page}`;
    async function fetchData() {
      try {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: true });
        const people = await fetch(url).then((response) => response.json());
        if (!people.results) {
          dispatch({
            type: SET_ERROR,
            error: { hasError: true, message: "Failed to fetch data" },
          });
          return;
        }

        dispatch({ type: SET_DATA, data: people.results });
        dispatch({ type: SET_TOTAL_PAGE, totalPage: people.total_pages });
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
  }, [state.page]);

  useEffect(() => {
    if (!state.query) {
      return;
    }
    const url = `${peopleSearchBaseUrl}?api_key=${
      process.env.REACT_APP_API_KEY
    }&query=${encodeURI(state.query)}`;

    async function fetchData() {
      try {
        dispatch({ type: SET_LOADING_INDICATOR, isLoading: true });
        const data = await fetch(url).then((response) => response.json());
        if (!data.results) {
          dispatch({
            type: SET_ERROR,
            error: { hasError: true, message: "Failed to fetch data" },
          });
          return;
        }
        dispatch({ type: SET_SEARCH_DATA, searchData: data.results });
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
  }, [state.query]);

  return (
    <>
      <PeopleTitle />
      <SearchBar
        value={state.value}
        placeholder="Enter personality name"
        changeHandle={changeHandle}
        submitHandle={submitHandle}
      />
      {state.value === "" ? (
        <PeopleDashBoard peopleData={state.data} isLoading={state.isLoading} />
      ) : (
        <PeopleSearchResults
          peopleData={state.query ? state.searchData : state.data}
          value={state.value}
          isLoading={state.isLoading}
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
