import React from "react";
import Movies from "./movies/Movies";
import People from "./people/PeopleDisplay";
import TvShows from "./tvshows/TvDisplay";
import MovieDetails from "./movies/details/MovieDetails";
import TvShowDetails from "./tvshows/details/TvShowDetails";
import PeopleDetails from "./people/details/PeopleDetails";
import TvSearchResults from "./tvshows/search/TvSearchResults";
import PeopleSearchResults from "./people/search/PeopleSearchResults";
import { Switch, Route } from "react-router-dom";
import MovieDisplay from "./movies/MovieDisplay";

function Main(props) {
  return (
    <div className="display">
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movies/:genre" component={MovieDisplay} />
        <Route exact path="/movie/:genre" component={MovieDetails} />
        <Route exact path="/tv-shows/:genre" component={TvShows} />
        <Route exact path="/tv-show/:genre" component={TvShowDetails} />
        <Route exact path="/people" component={People} />
        <Route exact path="/people/:id" component={PeopleDetails} />
        

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
