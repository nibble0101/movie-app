import React from "react";
import Movies from "./movies/MovieDisplay";
import People from "./people/PeopleDisplay";
import TvShows from "./tvshows/TvDisplay";
import MovieDetails from "./movies/details/MovieDetails";
import TvShowDetails from "./tvshows/details/TvShowDetails";
import PeopleDetails from "./people/details/PeopleDetails";
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
        <Route exact path="/tvshows/:genre" component={TvShows} />
        <Route exact path="/tvshows/:genre/:id" component={TvShowDetails} />
        <Route exact path="/people" component={People} />
        <Route exact path="/people/:id" component={PeopleDetails} />
        <Route exact path="/movies/:genre" component={Movies} />
        <Route exact path = "/movies/:genre/:id" component = {MovieDetails} />
      </Switch>
    </div>
  );
}

export default Main;
