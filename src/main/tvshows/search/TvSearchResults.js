import React from "react";
import TvSearchResultDisplay from "./TvSearchResultDisplay";

function TvSearchResults(props) {
  return (
    <React.Fragment>
      <p style={{ textAlign: "center", padding: "1em" }}> Search Results </p>
      <TvSearchResultDisplay tvData={props.location.state.data} />
    </React.Fragment>
  );
}

export default TvSearchResults;
