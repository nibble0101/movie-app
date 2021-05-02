import React from "react";
import Movies from "./movies/Movies";
import People from "./people/PeopleDisplay";
import TvShows from "./tvshows/TvDisplay";
import MovieDetails from "./movies/details/MovieDetails";
import TvShowDetails from "./tvshows/details/TvShowDetails";
import PeopleDetails from "./people/details/PeopleDetails";
import MovieSearchResults from "./movies/search/MovieSearchResults";
import TvSearchResults from "./tvshows/search/TvSearchResults";
import PeopleSearchResults from "./people/search/PeopleSearchResults";
import { Switch, Route } from "react-router-dom";
import MovieDisplay from "./movies/MovieDisplay";

function Main(props) {
  return (
    <div className="display">
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movies/genre" component={MovieDisplay} />
        <Route exact path="/tvshows/:genre" component={TvShows} />
        <Route exact path="/tvshows/:genre/:id" component={TvShowDetails} />
        <Route exact path="/people" component={People} />
        <Route exact path="/people/:id" component={PeopleDetails} />
        <Route exact path="/movies/:genre" component={Movies} />
        <Route exact path="/movies/:genre/:id" component={MovieDetails} />
        <Route
          exact
          path="/movies/search/all/:name"
          component={MovieSearchResults}
        />
        <Route
          exact
          path="/tvshows/search/all/:name"
          component={TvSearchResults}
        />
        <Route
          exact
          path="/people/search/:name"
          component={PeopleSearchResults}
        />
      </Switch>
    </div>
  );
}

export default Main;
