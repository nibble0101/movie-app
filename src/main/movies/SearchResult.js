import React from "react";
import MovieDashBoard from "./MovieDashBoard";

function SearchResults(props) {
  const { movieData, value } = props;

  const regx = new RegExp("^" + value, "mig");
  const filteredMovieData = movieData.filter((movie) => regx.test(movie.title));

  return (
    <>
      <MovieDashBoard {...props} movieData={filteredMovieData} />
    </>
  );
}

export default SearchResults;
