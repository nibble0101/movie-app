import React from "react";
import * as url from './assets.json';

function Logo() {
  return (
    <p>
      Powered By:{" "}
      <a href={url.urlMoviedDb}>
        <img src={url.urlMovieDbLogo} width="100px" alt = "Movie Database Logo" />
      </a>
    </p>
  );
}

export default Logo;
