import React, { useContext } from "react";
import { context } from "../../store/ContextProvider";

function PagesDisplay(props) {
  const { activeMenu } = useContext(context);
  const active = activeMenu.movies
    ? "Movies"
    : activeMenu.tv
    ? "TV Shows"
    : "Personalities";
  return (
    <div className="pages">
      <p>
        <button className="load-more">
          {" "}
          Load More <span className="active-menu-text">{active}</span> <span className = "dots"> ... </span>{" "}
        </button>
      </p>
    </div>
  );
}

export default PagesDisplay;
