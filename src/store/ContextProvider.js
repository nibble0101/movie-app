import React, { useState, useEffect, useReducer } from "react";
import { displayReducer, initialMenu } from "./display-store";


/*
-- urls for fetching API configuration details 
and list of genres for movies and tv shows.
-- concatenate API key for each url before 
fetching data.
*/
const config = "https://api.themoviedb.org/3/configuration?api_key=" + process.env.REACT_APP_API_KEY;
const movie = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_API_KEY;
const tv = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + process.env.REACT_APP_API_KEY;

const context = React.createContext();

function ContextProvider(props) {
  const [activeMenu, dispatchActiveMenu] = useReducer(
    displayReducer,
    initialMenu
  );
  const [generalConfig, setGeneralConfig] = useState(null);
  const [currentShowName, setCurrentShowName] = useState("movie");
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

  const menuClickHandler = (e) => {
    const { id } = e.target;
    switch (id) {
      case "movies":
        dispatchActiveMenu("movies");
        setCurrentShowName("movie")
        return;
      case "tv":
        dispatchActiveMenu("tv");
        setCurrentShowName("tv")
        return;
      case "people":
        dispatchActiveMenu("people");
        setCurrentShowName("people")
        return;
    }
  };

  return (
    <React.Fragment>
      {config && (
        <context.Provider
          value={{ generalConfig, menuClickHandler, activeMenu}}
        >
          {props.children}
        </context.Provider>
      )}
    </React.Fragment>
  );
}

export { context, ContextProvider };
