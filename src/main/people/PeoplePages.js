import React from "react";

export default function PeoplePages(props) {
  const {previousPageHandler, nextPageHandler, peoplePage, totalPages} =  props
  
  return (
    <section className="pages">
      <p>
        <button className="controls" onClick={previousPageHandler}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className="current-page">
          {peoplePage} of {totalPages}
        </button>
        <button className="controls" onClick={nextPageHandler}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </p>
    </section>
  );
}
