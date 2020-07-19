import React from "react";

export default function TvPages(props) {
  const { tvPage, totalPages, previousPageHandler, nextPageHandler } = props;

  return (
    <section className="pages">
      <p>
        <button className="controls" onClick={previousPageHandler}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className="current-page">
          {tvPage} of {totalPages}
        </button>
        <button className="controls" onClick={nextPageHandler}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </p>
    </section>
  );
}
