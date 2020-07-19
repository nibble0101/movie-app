import React from "react";
import Movies from "./movies/MovieDisplay";
import People from "./people/PeopleDisplay";
import TvShows from "./tvshows/TvDisplay";
import { Switch, Route, Redirect } from "react-router-dom";

function Main(props) {
  return (
    <div className="display">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/movies" />} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/people" component={People} />
      </Switch>
    </div>
  );
}

export default Main;
