import React from "react";

export default function TvPages(props) {
  return (
    <section className="pages">
      <p>
        <button className="controls" onClick={props.firstPageHandler}>
          <i className="fa fa-chevron-left"></i>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className="controls" onClick={props.previousPageHandler}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className="current-page">
          {props.tvPage.toString().padStart(props.totalPages.toString().length, "0")} of {props.totalPages}
        </button>
        <button className="controls" onClick={props.nextPageHandler}>
          <i className="fa fa-chevron-right"></i>
        </button>
        <button className="controls" onClick={props.lastPageHandler}>
          <i className="fa fa-chevron-right"></i>
          <i className="fa fa-chevron-right"></i>
        </button>
      </p>
    </section>
  );
}
