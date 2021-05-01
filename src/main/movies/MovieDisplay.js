import React, { useState, useEffect } from "react";
import MovieDashBoard from "./MovieDashBoard";
import { Genre } from "./Genre";
import MoviePages from "./MoviePages";
import Loader from "../Loader";

const baseUrl = "https://api.themoviedb.org/3";

const movieUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
const genreUrl = `${baseUrl}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;

export default function MovieDisplay() {
  const [movieData, setMovieData] = useState([]);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [genreId, setGenreId] = useState(28);

  const lastPageHandler = () => {
    if (moviePage === totalPages) {
      return;
    }
    setMoviePage(totalPages);
  };
  const selectGenreHandler = (event) => {
    const { value } = event.target;
    const genreObject = movieGenreList.find(
      (genreObj) => genreObj.name === value
    );
    setGenreId(genreObject.id);
  };
  const nextPageHandler = () => {
    if (moviePage === totalPages) {
      return;
    }
    setMoviePage((prevPage) => prevPage + 1);
  };
  const firstPageHandler = () => {
    if (moviePage === 1) {
      return;
    }
    setMoviePage(1);
  };
  const previousPageHandler = () => {
    if (moviePage === 1) {
      return;
    }
    setMoviePage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const url = `${movieUrl}&page=${moviePage}&with_genres=${genreId} `;
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await fetch(url).then((response) => response.json());
        setMovieData(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [moviePage, genreId]);

  useEffect(() => {
    async function fetchGenre() {
      try {
        const genre = await fetch(genreUrl).then((response) => response.json());
        setMovieGenreList(genre.genres);
        console.log(genre.genres);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGenre();
  }, []);
  if (!movieGenreList.length || !movieData.length) {
    return <Loader />;
  }

  return (
    <>
      <Genre
        genreList={movieGenreList}
        genreId={genreId}
        selectGenreHandler={selectGenreHandler}
      />
      <MovieDashBoard
        movieData={movieData}
        movieGenreList={movieGenreList}
        id={genreId}
        isLoading={isLoading}
      />
      <MoviePages
        moviePage={moviePage}
        totalPages={totalPages}
        firstPageHandler={firstPageHandler}
        nextPageHandler={nextPageHandler}
        previousPageHandler={previousPageHandler}
        lastPageHandler={lastPageHandler}
      />
    </>
  );
}
