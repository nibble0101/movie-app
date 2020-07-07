import React from "react";
import * as url from './assets.json';

function Logo() {
  return (
    <div className="footer-movie-db-logo">
      Powered By:{" "}
      <a href={url.urlMoviedDb}>
        <img src={url.urlMovieDbLogo} width="100px" />
      </a>
    </div>
  );
}

export default Logo;
