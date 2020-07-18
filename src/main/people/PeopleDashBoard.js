import React from "react";
import Zoom from "react-reveal/Zoom";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function PeopleDashboard(props) {
  const { peopleData } = props;
  return (
    <div className="show-wrapper">
      <div className="show">
        {peopleData.map((v, i) => {
          return (
            <Zoom key={i + "people"}>
              <div className="image-wrapper">
                <img src={v.profile_path ? baseMovieUrl + v.profile_path : altUrl} />
                <p className="title">Name: {v.name}</p>
                <p className="rating">{v.popularity}</p>
                <p className="designation">
                  Known for: {v.known_for_department}
                </p>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
}

export default PeopleDashboard;
