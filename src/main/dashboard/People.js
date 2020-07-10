import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
import { peopleReducer } from "../../store/people-reducer";
const url = "https://image.tmdb.org/t/p/w300/";

function People(props) {
  const { people } = useContext(context);
  return (
    <div className="show-wrapper">
      <h1> People </h1>
      <div className="show">
        {people &&
          people.results.map((v, i) => {
            return (
              <Zoom key={Math.random()}>
                <div className="image-wrapper">
                  <img src={url + v.profile_path} key={Math.random()} />
                  <p className="title">Name:  {v.name}</p>
                  <p className="rating">{v.popularity}</p>
                  <p className="designation"> Know for:  {v.known_for_department}</p>
                </div>
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default People;
