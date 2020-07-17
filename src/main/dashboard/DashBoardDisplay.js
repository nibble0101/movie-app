import React, { useContext } from "react";
import Movies from "./Movies";
import People from "./People";
import TvShows from "./TvShows";
import { context } from "../../store/ContextProvider";
import {Switch, Route, Redirect} from "react-router-dom";

function DashBoardDisplay(props) {
  return (
    <div className="display">
        <Switch>
            <Route exact path = "/" render = {() => <Redirect to = "/movies" />} />
            <Route exact path = "/movies" component = {Movies} />
            <Route exact path = "/tvshows" component = {TvShows} />
            <Route exact path = "/people" component = {People} />
        </Switch>
    </div>
  );
}

export default DashBoardDisplay;
