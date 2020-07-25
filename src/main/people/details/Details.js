import React from "react";
import Image from "./Image";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Details(props) {
  return (
    <section
      className="details"
      style={{
        backgroundImage: `url(${imageBaseUrl + props.details.profile_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <div className="wrapper">
        <Image src={props.details.profile_path} />
        <div className="details-text">
          <h1>{props.details.name} </h1>
          <hr />
          <div>
            <h2> Birthday </h2>
            <p>{props.details.birthday ? props.details.birthday: "Not Available" }</p>
          </div>
          <div>
            <h2> Place of birth </h2>
            <p> {props.details.place_of_birth ? props.details.place_of_birth : "Not Available"}</p>
          </div>
          {props.details.deathday && (
            <div>
              <h2> Deathday </h2>
              <p> {props.details.deathday}</p>
            </div>
          )}
           <div>
            <h2> Biography </h2>
            <p> {props.details.biography ? props.details.biography : "Not Available"}</p>
          </div>
          <div>
            <h2> Known for </h2>
            <p>
              {props.details.known_for_department}
            </p>
          </div>
          <hr />
          {props.details.homepage && (
            <div className="home-link">
              <h2> Home Page </h2>
              <p>
                <a href={props.details.homepage}>
                  <i className="fa fa-link" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Details;
