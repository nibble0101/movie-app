import React from "react";
import MovieSearchResultDisplay from "./MovieSearchResultDisplay";

function MovieSearchResults(props) {
  return (
    <React.Fragment>
      <p style={{ textAlign: "center", padding: "1em" }}> Search Results </p>
      <MovieSearchResultDisplay movieData={props.location.state.data} />
    </React.Fragment>
  );
}

export default MovieSearchResults;
