import React, { useState, useEffect, useCallback } from "react";
import TvTitle from "./TvTitle";
import TvSearch from "./TvSearch";
import TvGenre from "./TvGenre";
import TvDashBoard from "./TvDashBoard";
import TvPages from "./TvPages";

const genreUrl = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + process.env.REACT_APP_API_KEY
const tvUrl = "https://api.themoviedb.org/3/discover/tv?api_key=" + process.env.REACT_APP_API_KEY;

function TvDisplay() {
  const [tvData, setTvData] = useState([]);
  const [tvGenre, setTvGenre] = useState(0);
  const [tvGenreList, setTvGenreList] = useState([]);
  const [tvPage, setTvPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [queryText, setQueryText] = useState("");
  const previousPageHandler = useCallback(
    (e) => {
      if (tvPage === 1) {
        return;
      }
      setTvPage((prevPage) => prevPage - 1);
    },
    [tvPage]
  );
  const nextPageHandler = useCallback(
    (e) => {
      if (tvPage === totalPages) {
        return;
      }
      setTvPage((prevPage) => prevPage + 1);
    },
    [tvPage, totalPages]
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
    setTvGenre(genreId);
  }, []);
  useEffect(() => {
    const genre = tvGenre === 0 ? "" : "&with_genres=" + tvGenre;
    const url = tvUrl + "&page=" + tvPage + genre;
    async function fetchData() {
      const tvShows = await fetch(url).then((response) => response.json());
      setTvData(tvShows.results);
      console.log(tvShows)
      setTotalPages(tvShows.total_pages);
    }
    fetchData();
  }, [tvPage, queryText, tvGenre]);
  useEffect(() => {
    async function fetchGenre() {
      const genre = await fetch(genreUrl).then((response) => response.json());
      setTvGenreList(genre.genres);
    }
    fetchGenre();
  }, []);
  return (
    <React.Fragment>
      <TvTitle />
      <TvSearch />
      <TvGenre tvGenreList = {tvGenreList} genreClickHandler = {genreClickHandler} />
      <TvDashBoard tvData={tvData} />
      <TvPages
        tvPage={tvPage}
        totalPages={totalPages}
        previousPageHandler={previousPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </React.Fragment>
  );
}
export default TvDisplay;
