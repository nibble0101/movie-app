import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Details from "./Details";
import { parseQueryString } from "../../../utils/utils";
const baseUrl = "https://api.themoviedb.org/3/movie";

function MovieDetails(props) {
  const [details, setDetails] = useState({
    genres: [],
    production_companies: [],
    episode_run_time: [],
    spoken_languages: [],
  });
  const { id } = parseQueryString(useLocation().search);

  useEffect(() => {
    const url = `${baseUrl}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    async function fetchDetails() {
      const details = await fetch(url).then((response) => response.json());
      setDetails(details);
    }
    fetchDetails();
  }, [id]);
  return (
    <>
      <Details details={details} />
    </>
  );
}

export default MovieDetails;
