import React from "react";

export default function MoviePages(props) {
  return (
    <section className="pages">
      <p>
        <button className="controls" onClick={props.previousPageHandler}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className="current-page">
          {props.moviePage} of {props.totalPages}
        </button>
        <button className="controls" onClick={props.nextPageHandler}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </p>
    </section>
  );
}
