import React, { useContext } from "react";
import { context } from "../../store/ContextProvider";

function PagesDisplay(props) {
  const { activeMenu, loadMoreClickHandler } = useContext(context);
  const active = activeMenu.movies
    ? "Movies"
    : activeMenu.tv
    ? "TV Shows"
    : "Personalities";
  return (
    <div className="pages">
      <p>
        <button className="load-more" onClick = {loadMoreClickHandler}>
          {" "}
          Load More {active}  ... {" "}
        </button>
      </p>
    </div>
  );
}

export default PagesDisplay;
