import React from "react";

export default function MoviePages(props) {
  const {
    moviePage,
    totalPages,
    firstPageHandler,
    nextPageHandler,
    previousPageHandler,
    lastPageHandler,
  } = props;
  return (
    <section className="pages">
      <p>
        <button className="controls" onClick={firstPageHandler}>
          <i className="fa fa-chevron-left"></i>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className="controls" onClick={previousPageHandler}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <span className="current-page">
          {moviePage.toString().padStart(totalPages.toString().length, "0")} of{" "}
          {totalPages}
        </span>
        <button className="controls" onClick={nextPageHandler}>
          <i className="fa fa-chevron-right"></i>
        </button>
        <button className="controls" onClick={lastPageHandler}>
          <i className="fa fa-chevron-right"></i>
          <i className="fa fa-chevron-right"></i>
        </button>
      </p>
    </section>
  );
}
