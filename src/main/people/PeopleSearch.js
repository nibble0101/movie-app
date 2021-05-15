import React from "react";

export default function PeopleSearch(props) {
  const { value, submitHandle, changeHandle } = props;
  return (
    <div className="search">
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="search"
          value={value}
          onChange={changeHandle}
          placeholder="Enter name of personality"
          className="search__text-input"
        />
        <input type="submit" className="search__submit-input" value="Submit" />
      </form>
    </div>
  );
}
