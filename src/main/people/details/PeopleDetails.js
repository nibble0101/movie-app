import React, { useState, useEffect } from "react";
import Details from "./Details";
import Loader from "../../Loader";
// import Error from "../../Error";
import { Redirect } from "react-router-dom";
const baseUrl = "https://api.themoviedb.org/3/person";

export default function PeopleDetails(props) {
  const [details, setDetails] = useState({});
  const [error, setError] = useState({ hasError: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { params } = props.match;
  useEffect(() => {
    const url = `${baseUrl}/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    async function fetchDetails() {
      try {
        setIsLoading(true);
        const details = await fetch(url).then((response) => response.json());
        console.log(details);
        if (details.success === false && details.status_code === 34) {
          setError({ hasError: true, message: details.status_message });
          return;
        }
        setDetails(details);
      } catch (error) {
        setError({
          hasError: true,
          message: "Failed to load resource at the moment",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetails();
  }, [params.id]);
  if (isLoading) {
    return <Loader />;
  }
  if (!params.id) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: {
            message: error.message
              ? error.message
              : !params.id
              ? "Movie Id required"
              : "",
          },
        }}
      />
    );
  }

  return <Details details={details} />;
}
