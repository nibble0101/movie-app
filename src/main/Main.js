import React from "react";
import Movies from "./movies/MovieDisplay";
import People from "./people/PeopleDisplay";
import TvShows from "./tvshows/TvDisplay";
import { Switch, Route, Redirect } from "react-router-dom";

function Main(props) {
  return (
    <div className="display">
      <Switch>
        <Route exact path="/" render={({location}) => {
        const state = !location.state ? {genreId: 0} : location.state;
        return <Redirect to={{pathname: "/movies/all", state: state}} />
        }} 
        />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/people" component={People} />
        <Route exact path="/movies/:genre" component={Movies} />
      </Switch>
    </div>
  );
}

export default Main;
