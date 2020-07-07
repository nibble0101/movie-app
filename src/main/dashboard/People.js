import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
const url = "https://image.tmdb.org/t/p/w300/";

function People(props) {
 const {people} = useContext(context);
  return (
    <div className="show-wrapper">
      <h1> People </h1>
      <div className="show">
        {people &&
          people.results.map((v, i) => {
            return (
              <Zoom key={Math.random()}>
                <img src={url + v.profile_path} key={"people" + i} />
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default People;
