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
  const [totalPages, setTotalPages] = useState(0);

  const firstPageHandler = useCallback(
    (e) => {
      if (peoplePage === 1) {
        return;
      }
      setPeoplePage(1);
    },
    [peoplePage]
  );

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
    [peoplePage, totalPages]
  );

  const lastPageHandler = useCallback(
    (e) => {
      if (peoplePage === totalPages) {
        return;
      }
      setPeoplePage(totalPages);
    },
    [peoplePage, totalPages]
  );

  useEffect(() => {
    const url = peopleUrl + "&page=" + peoplePage;
    async function fetchData() {
      const people = await fetch(url).then((response) => response.json());
      setPeopleData(people.results);
      setTotalPages(people.total_pages);
    }
    fetchData();
  }, [peoplePage]);

  return (
    <React.Fragment>
      <PeopleTitle />
      <PeopleSearch />
      <PeopleDashBoard peopleData={peopleData} />
      <PeoplePages
        peoplePage={peoplePage}
        totalPages={totalPages}
        firstPageHandler={firstPageHandler}
        nextPageHandler={nextPageHandler}
        previousPageHandler={previousPageHandler}
        lastPageHandler={lastPageHandler}
      />
    </React.Fragment>
  );
}
export default PeopleDisplay;
