import React from "react";
import Image from "./Image";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
const baseTvUrl = "https://image.tmdb.org/t/p/w300/";

function Details(props) {
  let {episode_run_time} = props.details, runTime;
  if(episode_run_time.length > 1){
      runTime = "Between " + episode_run_time[0] + " and " + episode_run_time[1] + " minutes";
  }else if(episode_run_time.length === 1){
       runTime = episode_run_time[0] + " minutes";
  }else{
       runTime = "Not available"
  }
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
          <div className = "fine-details">
            <p className="episodes">
              <span className = "label"> Episodes: </span>  {props.details.number_of_episodes}
            </p>
            <p className="seasons">
            <span className = "label"> Seasons: </span> {props.details.number_of_seasons}
            </p>
            <p className="episode-run-time">
            <span className = "label"> Episode runtime: </span> 
               {runTime}
            </p>
            <p className="sub-genres">
            <span className = "label"> Genre: </span>
               
              {props.details.genres.map((subGenre, index) => {
                  if(index){
                      return <span key={`${subGenre.id}${index}`}>, {subGenre.name} </span>

                  }else{
                    return <span key={`${subGenre.id}${index}`}> {subGenre.name} </span>

                  }
                
              })}
            </p>
          </div>
          <hr />
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
            <p>
              {" "}
              {props.details.last_air_date ? props.details.last_air_date : "-"}
            </p>
          </div>
          <hr />
          <div className="home-link">
            <h2> Home Page </h2>
            <p>
              <a href={props.details.homepage}>
                <i className="fa fa-link" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
