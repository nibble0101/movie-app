import React, { useState, useEffect, useReducer, useCallback } from "react";
import { displayReducer, initialMenu } from "./display-store";
import { initialMovieState, movieReducer } from "./movie-reducer";
import { initialTvState, tvReducer } from "./tv-reducer";
import { initialPeopleState, peopleReducer } from "./people-reducer";

/*
-- urls for fetching API configuration details 
and list of genres for movies and tv shows.
-- concatenate API key for each url before 
fetching data.
*/
const config =
  "https://api.themoviedb.org/3/configuration?api_key=" +
  process.env.REACT_APP_API_KEY;
const movie =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  process.env.REACT_APP_API_KEY;
const tv =
  "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
  process.env.REACT_APP_API_KEY;

const context = React.createContext();

function ContextProvider(props) {
  const [activeMenu, dispatchActiveMenu] = useReducer(
    displayReducer,
    initialMenu
  );

  const [movieState, dispatchMovieState] = useReducer(
    movieReducer,
    initialMovieState
  );
  const [tvState, dispatchTvState] = useReducer(tvReducer, initialTvState);
  const [peopleState, dispatchPeopleState] = useReducer(
    peopleReducer,
    initialPeopleState
  );
  const [movies, setMovies] = useState(null);
  const [tvShows, setTvShows] = useState(null);
  const [people, setPeople] = useState(null);

  const [generalConfig, setGeneralConfig] = useState(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const url = [config, movie, tv];
    async function fetchConfig() {
      await Promise.all(
        url.map((value) => fetch(value).then((response) => response.json()))
      ).then((value) => {
        setGeneralConfig({
          config: value[0],
          movies: value[1],
          tv: value[2],
        });
      });
    }
    fetchConfig();
  }, []);

  useEffect(() => {
    
    const genre =
      !movieState.genre ? "" : "&with_genres=" + movieState.genre;
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&page=" +
      movieState.page +
      genre;
    const fetchMovies = async () => {
      
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setLoading(false)
        });
    };
    fetchMovies();
   
  }, [movieState]);

  useEffect(() => {
    
    const genre = !tvState.genre ? "" : "&with_genres=" + tvState.genre;
    const url =
      "https://api.themoviedb.org/3/discover/tv?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&page=" +
      tvState.page +
      genre;
    const fetchTvShows = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setTvShows(data));
    };
    fetchTvShows();
    
  }, [tvState]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/person/popular?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&page=" +
      peopleState.page;
    const fetchPeople = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setPeople(data));
    };
    fetchPeople();
    
  }, [peopleState]);

  const menuClickHandler = useCallback((e) => {
    const { id } = e.target;
    switch (id) {
      case "movies":
        dispatchActiveMenu("movies");
        return;
      case "tv":
        dispatchActiveMenu("tv");
        return;
      case "people":
        dispatchActiveMenu("people");
        return;
    }
  });
  const genreClickHandler = useCallback((e) => {
    const len = e.target.length;
    let activeMenuId;
    for (let i = 0; i < len; i++) {
      if (e.target.value === e.target[i].value) {
        activeMenuId = +e.target[i].id;
        break;
      }
    }
    if (activeMenu.movies) {
      dispatchMovieState({type: "set-genre", genre: activeMenuId});
    } else if (activeMenu.tv) {
      dispatchTvState({type: "set-genre", genre: activeMenuId});
    } 
  });
  const loadMoreClickHandler = () => {
      if(activeMenu.movies){
        dispatchMovieState({type: "set-page", page: movieState.page + 1})
      }else if(activeMenu.tv){
        dispatchTvState({type: "set-page", page: tvState.page + 1})
      }else if(activeMenu.people){
        dispatchPeopleState({type: "set-page", page: peopleState.page + 1})
      }
  }
  return (
    <React.Fragment>
      {config && (
        <context.Provider
          value={{
            loading,
            generalConfig,
            menuClickHandler,
            genreClickHandler,
            loadMoreClickHandler,
            activeMenu,
            movies,
            tvShows,
            people,
          }}
        >
          {props.children}
        </context.Provider>
      )}
    </React.Fragment>
  );
}

export { context, ContextProvider };
