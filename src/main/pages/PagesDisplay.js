import React, { useContext } from "react";
import { context } from "../../store/ContextProvider";

function PagesDisplay(props) {
  const {
    activeMenu,
    totalPage,
    movieState,
    tvState,
    peopleState,
    previousPageHandler,
    nextPageHandler,
  } = useContext(context);
  let currPage, totPage;
  if (activeMenu.movies) {
    currPage = movieState.page;
    totPage = totalPage.movie;
  } else if (activeMenu.tv) {
    currPage = tvState.page;
    totPage = totalPage.tv;
  } else if (activeMenu.people) {
    currPage = peopleState.page;
    totPage = totalPage.people;
  }
  return (
    <div className="pages">
      <p>
        <button className="controls" onClick={previousPageHandler}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className="current-page">
          {currPage} of {totPage}
        </button>
        <button className="controls" onClick={nextPageHandler}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </p>
    </div>
  );
}

export default PagesDisplay;
