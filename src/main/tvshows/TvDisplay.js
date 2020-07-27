import React, { useState, useEffect, useCallback } from "react";
import TvSearch from "./TvSearch";
import TvGenre from "./TvGenre";
import TvDashBoard from "./TvDashBoard";
import TvPages from "./TvPages";

const genreUrl =
  "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
  process.env.REACT_APP_API_KEY;
const tvUrl =
  "https://api.themoviedb.org/3/discover/tv?api_key=" +
  process.env.REACT_APP_API_KEY;

function TvDisplay(props) {
  const { state } = props.location;
  const [tvData, setTvData] = useState([]);
  const [tvGenreList, setTvGenreList] = useState([]);
  const [tvPage, setTvPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [queryText, setQueryText] = useState("");

  const lastPageHandler = useCallback(
    (e) => {
      if (tvPage === totalPages) {
        return;
      }
      setTvPage(totalPages);
    },
    [tvPage, totalPages]
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
  const firstPageHandler = useCallback(
    (e) => {
      if (tvPage === 1) {
        return;
      }
      setTvPage(1);
    },
    [tvPage]
  );
  const previousPageHandler = useCallback(
    (e) => {
      if (tvPage === 1) {
        return;
      }
      setTvPage((prevPage) => prevPage - 1);
    },
    [tvPage]
  );

  const resetPage = useCallback((e) => {
    setTvPage(1);
  }, []);

  useEffect(() => {
    const genre = state.genreId === 0 ? "" : "&with_genres=" + state.genreId;
    const url = tvUrl + "&page=" + tvPage + genre;
    async function fetchData() {
      const tvShows = await fetch(url).then((response) => response.json());
      setTvData(tvShows.results);
      setTotalPages(tvShows.total_pages);
    }
    fetchData();
  }, [tvPage, queryText, state.genreId]);

  useEffect(() => {
    async function fetchGenre() {
      const genre = await fetch(genreUrl).then((response) => response.json());
      setTvGenreList(genre.genres);
    }
    fetchGenre();
  }, []);

  return (
    <React.Fragment>
      <TvGenre tvGenreList={tvGenreList} resetPage={resetPage} />
      <TvSearch />
      <TvDashBoard tvData={tvData} />
      <TvPages
        tvPage={tvPage}
        totalPages={totalPages}
        previousPageHandler={previousPageHandler}
        nextPageHandler={nextPageHandler}
        firstPageHandler={firstPageHandler}
        lastPageHandler={lastPageHandler}
      />
    </React.Fragment>
  );
}
export default TvDisplay;
