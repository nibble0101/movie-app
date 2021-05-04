import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Details from "./Details";
import DetailsHomeIcon from "../DetailsHomeIcon";
import { parseQueryString } from "../../../utils/utils";
const baseUrl = "https://api.themoviedb.org/3/movie";

function MovieDetails(props) {
  const [details, setDetails] = useState({
    genres: [],
    production_companies: [],
    episode_run_time: [],
    spoken_languages: [],
  });
  const { genre, genreId, movieId } = parseQueryString(useLocation().search);

  useEffect(() => {
    const url = `${baseUrl}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    async function fetchDetails() {
      const details = await fetch(url).then((response) => response.json());
      setDetails(details);
    }
    fetchDetails();
  }, [movieId]);
  return (
    <>
      <DetailsHomeIcon url = {`/movies/${genre}?genre=${genre}&genreId=${genreId}`} />
      <Details details={details} />
    </>
  );
}

export default MovieDetails;
