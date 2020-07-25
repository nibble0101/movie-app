import React from "react";
import Image from "./Image";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
const baseTvUrl = "https://image.tmdb.org/t/p/w300/";

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
          <h1>{props.details.original_name} </h1>
          <p className="tag-line"> {props.details.type} </p>
          <div>
            <p>
              <span className="episodes">
                Episodes: {props.details.number_of_episodes}
              </span>
              <span className="seasons">
                Seasons: {props.details.number_of_seasons}
              </span>
              <span className="episode-run-time">
                Episode runtime: between {props.details.episode_run_time[0]} and{" "}
                {props.details.episode_run_time[1]} minutes
              </span>
              <span className="sub-genres">{props.details.genres.map((subGenre, index) => {
                  return <span key = {`${subGenre.id}${index}`}> {subGenre.name} </span>
              })}</span>
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
            <h2> First Aired </h2>
            <p> {props.details.first_air_date}</p>
          </div>
          <div>
            <h2> Last Aired </h2>
            <p> {props.details.last_air_date ? props.details.last_air_date : "-" }</p>
          </div>
          <div>
            <h2> Networks </h2>
            <p>
              {props.details.networks.map((network, index) => {
                return <span key={network.name + index}> <img style = {{width: "30px"}}  src =  {baseTvUrl + network.logo_path} /> {network.name} </span>
              })}
            </p>
          </div>
          <div className="home-link">
            <h2> Home Page </h2>
            <p>
              <a href={props.details.homepage} >
                {" "}
                <i className="fa fa-link" aria-hidden="true"></i>{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
