import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Loader";
import {formatUriComponent} from "../../utils/utils";
import "../../styles/Movies.css";

const baseUrl = "https://api.themoviedb.org/3";

export default function Movies() {
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();

  const selectGenre = (event) => {
    setSelectedGenre(event.target.value);
  };
  const submitGenre = (event) => {
    event.preventDefault();
    const genreObject = genreList.find(
      (genreObj) => genreObj.name === selectedGenre
    );
    const { id, name } = genreObject;
    history.push(`/movies/${formatUriComponent(name)}?id=${id}`, { ...genreObject });
    return null;
  };
  useEffect(() => {
    const genreUrl = `${baseUrl}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;
    async function fetchGenre() {
      try {
        const { genres } = await fetch(genreUrl).then((response) =>
          response.json()
        );
        const { name } = genres[0];
        setSelectedGenre(name);
        setGenreList(genres);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGenre();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <form className="genre" onSubmit={submitGenre}>
      <label htmlFor="genre">Select Genre</label>
      <select id="genre" onChange={selectGenre} value={selectedGenre}>
        {genreList.map((genreObject) => {
          return <option key={genreObject.id}> {genreObject.name} </option>;
        })}
      </select>
      <input type="submit" value="Proceed" />
    </form>
  );
}
