import React from "react";
import Pagination from "react-js-pagination";
import "../styles/Pagination.css";

export default function PaginationWrapper(props) {
  return (
    <div className="pagination">
      <Pagination
        activePage={props.activePage}
        itemsCountPerPage={props.itemsCountPerPage}
        totalItemsCount={props.totalItemsCount}
        pageRangeDisplayed={props.pageRangeDisplayed}
        onChange={props.pageChangeHandler}
        innerClass="pagination__wrapper"
        activeClass="pagination__active"
        activeLinkClass="pagination__link--active-page"
        linkClass="pagination__link"
        itemClass="pagination__list-item"
        itemClassFirst="pagination--first-list-item"
        itemClassLast="pagination--last-list-item"
      />
    </div>
  );
}
