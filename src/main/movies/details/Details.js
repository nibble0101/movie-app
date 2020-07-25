import React from "react";
import Image from "./Image";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Details(props) {
  console.log(props.details);
  return (
    <section
      className="details"
      style={{
        backgroundImage: `url(${imageBaseUrl + props.details.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <div className="wrapper">
        <Image src={props.details.poster_path} />
        <div className="details-text">
          <h1>{props.details.original_title} </h1>
          <p className="tag-line"> {props.details.tagline} </p>
          <div>
            <p>
              <span className="details-date">
                {props.details.release_date}
              </span>
              <span className="run-time">
                {props.details.runtime} minutes
              </span>
              <span className="sub-genre">
                {props.details.genres.map((genre, index) => {
                  if (index) {
                    return <span key={genre.id + "genre"}>, {genre.name}</span>;
                  } else {
                    return <span key={genre.id + "genre"}> {genre.name}</span>;
                  }
                })}
              </span>
            </p>
            <hr />
          </div>
          <div>
            <h2> Status </h2>
            <p>{props.details.status}</p>
          </div>
          <div>
            <h2> Overview </h2>
            <p> {props.details.overview}</p>
          </div>
          <div>
            <h2> Production Companies </h2>
            <p>
              {props.details.production_companies.map((company, index) => {
                if (index) {
                  return <span key={company.name + index}>, {company.name} </span>;
                } else {
                  return <span key={company.name + index}> {company.name} </span>;
                }
              })}
            </p>
          </div>
          <div className="home-link">
            <h2> Home Page </h2>
            <p>
              <a href={props.details.homepage}> <i className="fa fa-link" aria-hidden="true"></i> </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
