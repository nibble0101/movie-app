import React, { useRef } from "react";
// const baseImageUrl = "https://image.tmdb.org/t/p/original/";
function Seasons(props) {
  const accordionRef = useRef();
  const accordionSymbolRef = useRef();
  const firstSeasonRef = useRef();
  const clickHandler =(e) => {
    if (accordionRef.current.style.maxHeight) {
      accordionRef.current.style.maxHeight = null;
      accordionSymbolRef.current.innerHTML = "&#43;";
    } else {
      accordionRef.current.style.maxHeight =
        firstSeasonRef.current.scrollHeight + "px";
      accordionRef.current.style.overflow = "scroll";
      accordionSymbolRef.current.innerHTML = "&#8722;";
    }
  };
  return (
    <div className="season-wrapper">
      <h2 className="seasons-header">
        <span> Seasons </span>
        <span
          onClick={clickHandler}
          ref={accordionSymbolRef}
          className="symbol"
        >
          &#43;
        </span>
      </h2>
      <section className="accordion" ref={accordionRef}>
        {props.seasons.map((season, index) => {
          if (season.season_number) {
            if (index === 1) {
              return (
                <section
                  key={`season${index}`}
                  className="season"
                  ref={firstSeasonRef}
                >
                  <p> {season.name}</p>
                  <p> First Aired: {season.air_date}</p>
                  <p>Episodes: {season.episode_count} </p>
                  {season.overview && <p> Overview: {season.overview}</p>}
                </section>
              );
            } else {
              return (
                <section key={`season${index}`} className="season">
                  <p> {season.name}</p>
                  <p> First Aired: {season.air_date}</p>
                  <p>Episodes: {season.episode_count} </p>
                  {season.overview && <p> Overview: {season.overview}</p>}
                </section>
              );
            }
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
}

export default Seasons;
