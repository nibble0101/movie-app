import React from "react";

function TvGenre(props) {
  const { tvGenreList, genreClickHandler } = props;
  return (
    <section className="genres">
      <label htmlFor="genres"> Choose Genre: </label>
      <select id="genres" name="genres" onChange={genreClickHandler}>
        <option id={0} key={0} value = "All">
          All
        </option>
        {tvGenreList.map((v) => {
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

export default TvGenre;
