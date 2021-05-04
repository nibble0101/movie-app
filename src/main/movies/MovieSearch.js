import React from "react";
import "../../styles/Search.css";

export default function MovieSearch(props) {
  const { value, submitHandle, changeHandle } = props;
  return (
    <div className="search">
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="search"
          value={value}
          onChange={changeHandle}
          placeholder="Enter Movie Title"
          className="search__text-input"
        />
        <input type="submit" className="search__submit-input" value="Submit" />
      </form>
    </div>
  );
}
