import React, { useState, useEffect } from "react";
import PeopleTitle from "./PeopleTitle";
import PeopleSearch from "./PeopleSearch";
import PeopleDashBoard from "./PeopleDashBoard";
import Pagination from "../Pagination";

const baseUrl = "https://api.themoviedb.org/3/person/popular";
function PeopleDisplay() {
  const [peopleData, setPeopleData] = useState([]);
  const [peoplePage, setPeoplePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pageHandler = (page) => {
    setPeoplePage(page);
  };

  useEffect(() => {
    const url = `${baseUrl}?api_key=${process.env.REACT_APP_API_KEY}&page=${peoplePage}`;
    async function fetchData() {
      try {
        setIsLoading(true);
        const people = await fetch(url).then((response) => response.json());
        setPeopleData(people.results);
        setTotalPages(people.total_pages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [peoplePage]);

  
  return (
    <>
      <PeopleTitle />
      <PeopleSearch />
      <PeopleDashBoard peopleData={peopleData} isLoading={isLoading} />
      <Pagination
        activePage={peoplePage}
        itemsCountPerPage={20}
        totalItemsCount={totalPages * 20}
        pageRangeDisplayed={2}
        pageChangeHandler={pageHandler}
      />
    </>
  );
}
export default PeopleDisplay;
