import React from "react";
import { Switch, Route } from "react-router-dom";
import Movies from "./movies/Movies";
import MovieDisplay from "./movies/MovieDisplay";
import MovieDetails from "./movies/details/MovieDetails";
import TvShows from "./tvshows/TvShows";
import TvShowsDisplay from "./tvshows/TvDisplay";
import TvShowDetails from "./tvshows/details/TvShowDetails";
import People from "./people/People";
import PeopleDetails from "./people/details/PeopleDetails";
import PageNotFound from "./PageNotFound";
import Error from "./Error";

function Main() {
  return (
    <div className="display">
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movies/:genre" component={MovieDisplay} />
        <Route exact path="/movie/:genre" component={MovieDetails} />
        <Route exact path="/tv" component={TvShows} />
        <Route exact path="/tvshows/:genre" component={TvShowsDisplay} />
        <Route exact path="/tvshow/:genre" component={TvShowDetails} />
        <Route exact path="/people" component={People} />
        <Route exact path="/people/:id" component={PeopleDetails} />
        <Route exact path="/error" component={Error} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default Main;
