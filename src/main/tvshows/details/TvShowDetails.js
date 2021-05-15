import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Details from "./Details";
import { parseQueryString } from "../../../utils/utils";

const baseUrl = "https://api.themoviedb.org/3/tv";

export default function TvShowDetails(props) {
  const [details, setDetails] = useState({
    genres: [],
    episode_run_time: [],
    networks: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });

  const { genre, genreId, id } = parseQueryString(useLocation().search);
  useEffect(() => {
    const url = `${baseUrl}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    async function fetchDetails() {
      setIsLoading(true);
      try {
        const details = await fetch(url).then((response) => response.json());
        setDetails(details);
      } catch (error) {
        setError({ hasError: true, message: "Unknown error has occurred" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetails();
  }, [id]);
  return (
    <Details
      details={details}
      genre={genre}
      isLoading={isLoading}
      error={error}
      genreId={genreId}
    />
  );
}
