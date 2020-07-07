import React, { useContext } from "react";
import { context } from "../../store/ContextProvider";
import Zoom from "react-reveal/Zoom";

function Genre(props) {
  const { generalConfig, activeMenu } = useContext(context);
  return (
    <React.Fragment>
      {generalConfig && (
        <div className="genres">
          <label for="genres"> Choose Genre: </label>
          <select id="genres">
            {generalConfig.movies.genres.map((v) => {
              return (
                <option id={v.id} key={v.id} value={v.name}>
                  {v.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </React.Fragment>
  );
}

export default Genre;
