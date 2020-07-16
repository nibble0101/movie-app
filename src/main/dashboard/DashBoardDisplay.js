import React, { useContext } from "react";
import Movies from "./Movies";
import People from "./People";
import TvShows from "./TvShows";
import { context } from "../../store/ContextProvider";
import {Switch, Route} from "react-router-dom";

function DashBoardDisplay(props) {
//   const { activeMenu } = useContext(context);
  return (
    <div className="display">
        <Switch>
            <Route exact path = "/" component = {Movies} />
            <Route path = "/tvshows" component = {TvShows} />
            <Route path = "/people" component = {People} />
        </Switch>
      
      {/* {activeMenu.movies && <Movies />}
      {activeMenu.people && <People />}
      {activeMenu.tv && <TvShows />} */}
    </div>
  );
}

export default DashBoardDisplay;
