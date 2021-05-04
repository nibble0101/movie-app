import React, { useState, useEffect } from "react";
import Details from "./Details";
const baseUrl = "https://api.themoviedb.org/3/movie";

function MovieDetails(props) {
  const [details, setDetails] = useState({
    genres: [],
    production_companies: [],
    episode_run_time: [],
    spoken_languages: [],
  });
  const { params } = props.match;
  console.log(params.id);
  useEffect(() => {
    const url = `${baseUrl}/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    async function fetchDetails() {
      const details = await fetch(url).then((response) => response.json());
      setDetails(details);
    }
    fetchDetails();
  }, [params.id]);
  return <Details details={details} />;
}

export default MovieDetails;
