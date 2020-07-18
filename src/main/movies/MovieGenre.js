import React from "react";
import Zoom from "react-reveal/Zoom";
function MovieGenre(props) {
  const { movieGenreList, genreClickHandler } = props;
  return (
    <Zoom>
      <section className="genres">
        <label htmlFor="genres"> Genre: </label>
        <select id="genres" name="genres" onChange={genreClickHandler}>
          <option id={0} key={0} value={"All"}>
            All
          </option>
          {movieGenreList.map((v) => {
            return (
              <option id={v.id} key={v.id} value={v.name}>
                {v.name}
              </option>
            );
          })}
        </select>
      </section>
    </Zoom>
  );
}

export default MovieGenre;
