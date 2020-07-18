import React from "react";
function MovieGenre(props) {
  const {movieGenreList, genreClickHandler} = props;
  return (
    <section className="genres">
      <label htmlFor="genres"> Choose Genre: </label>
      <select id="genres" name="genres" onChange={genreClickHandler}>
        <option id={0} key={0} value = {"All"}>
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
  );
}

export default MovieGenre;
