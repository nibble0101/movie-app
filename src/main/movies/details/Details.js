import React from "react";

function Details(props) {
  return (
    <section className="details">
      <h1>{props.details.original_title}</h1>
      <p>{props.details.runtime}</p>
      <p>{props.details.release_date}</p>
      <p>
        {props.details.genres.map((genre) => (
          <span key={genre.id + "genre"}> {genre.name}</span>
        ))}
      </p>
      <p> {props.details.tagline}</p>
      <p>{props.details.overview}</p>
      <p> {props.details.revenue} </p>
      <p> <a href = {props.details.homepage} > Home Page 🔗 </a> </p>
    </section>
  );
}

export default Details;
