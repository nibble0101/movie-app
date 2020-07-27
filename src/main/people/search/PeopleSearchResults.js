import React from "react";
import PeopleDashBoard from "../PeopleDashBoard";

function PeopleSearchResults(props) {
  return (
    <React.Fragment>
      <p style = {{textAlign: "center", padding: "1em"}} > Search Results  </p>
      <PeopleDashBoard peopleData={props.location.state.data} />
    </React.Fragment>
  );
}

export default PeopleSearchResults;
