import React, { useContext } from "react";
import Movies from "./Movies";
import People from "./People";
import TvShows from "./TvShows";
import { context } from "../../store/ContextProvider";

function DashBoardDisplay(props) {
  const { activeMenu } = useContext(context);
  return (
    <div className="display">
      {activeMenu.movies && <Movies />}
      {activeMenu.people && <People />}
      {activeMenu.tv && <TvShows />}
    </div>
  );
}

export default DashBoardDisplay;
