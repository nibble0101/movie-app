import React from "react";
import "../styles/Search.css";

export default function MovieSearch(props) {
  return (
    <div className="search">
      <form onSubmit={props.submitHandle}>
        <input
          type="text"
          name="search"
          value={props.value}
          onChange={props.changeHandle}
          placeholder={props.placeholder}
          className="search__text-input"
        />
        <input type="submit" className="search__submit-input" value="Submit" />
      </form>
    </div>
  );
}
