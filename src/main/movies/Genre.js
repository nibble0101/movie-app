import React from "react";

function Genre(props) {
  const { genreList, selectGenreHandler, genreId } = props;
  const { name } = genreList.find((genreObj) => genreObj.id === genreId);
  return (
    <div style={{display: "flex", justifyContent: "center", padding:"1em"}}>
      <label htmlFor="genre">Select Genre: </label>
      <select id="genre" onChange={selectGenreHandler} value={name}>
        {genreList.map((genre) => {
          return <option key={genre.id}> {genre.name} </option>;
        })}
      </select>
    </div>
  );
}

export { Genre };
