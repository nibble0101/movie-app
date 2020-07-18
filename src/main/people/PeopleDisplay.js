import React, { useState, useEffect, useCallback } from "react";
import PeopleTitle from "./PeopleTitle";
import PeopleSearch from "./PeopleSearch";
import PeopleDashBoard from "./PeopleDashBoard";
import PeoplePages from "./PeoplePages";

const peopleUrl =
  "https://api.themoviedb.org/3/person/popular?api_key=" +
  process.env.REACT_APP_API_KEY;
function PeopleDisplay() {
  const [peopleData, setPeopleData] = useState([]);
  const [peoplePage, setPeoplePage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [queryText, setQueryText] = useState("");
  const previousPageHandler = useCallback(
    (e) => {
      if (peoplePage === 1) {
        return;
      }
      setPeoplePage((prevPage) => prevPage - 1);
    },
    [peoplePage]
  );
  const nextPageHandler = useCallback(
    (e) => {
      if (peoplePage === totalPages) {
        return;
      }
      setPeoplePage((prevPage) => prevPage + 1);
    },
    [peoplePage]
  );

  useEffect(() => {
    const url = peopleUrl + "&page=" + peoplePage;
    async function fetchData() {
      const people = await fetch(url).then((response) => response.json());
      setPeopleData(people.results);
      console.log(people);
      setTotalPages(people.total_pages);
    }
    fetchData();
  }, [peoplePage, queryText]);

  return (
    <React.Fragment>
      <PeopleTitle />
      <PeopleSearch />
      <PeopleDashBoard peopleData={peopleData} />
      {peoplePage.length && (
        <PeoplePages
          peoplePage={peoplePage}
          totalPages={totalPages}
          nextPageHandler={nextPageHandler}
          previousPageHandler={previousPageHandler}
        />
      )}
    </React.Fragment>
  );
}
export default PeopleDisplay;
