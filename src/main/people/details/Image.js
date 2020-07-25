import React from "react";
const baseTvUrl = "https://image.tmdb.org/t/p/w300/";
function Image(props) {
  return (
    <div className="image-wrapper">
      <img src={baseTvUrl + props.src} alt="backdrop image" />
    </div>
  );
}

export default Image;
