import React from "react";
import PeopleDashBoard from "./PeopleDashBoard";

function PeopleSearchResults(props) {
  const { peopleData, value, isLoading } = props;
  const regx = new RegExp("^" + value, "mig");
  const filteredPeopleData = peopleData.filter((person) =>
    regx.test(person.name)
  );
  return (
    <>
      <p style={{ textAlign: "center", padding: "1em" }}> Search Results </p>
      <PeopleDashBoard isLoading={isLoading} peopleData={filteredPeopleData} />
    </>
  );
}

export default PeopleSearchResults;
