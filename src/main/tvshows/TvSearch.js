import React, { useState } from "react";

export default function TvSearch(props) {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const changeHandle = (e) => {
    setValue(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setQuery(value);
  };
  return (
    <div className="main-search">
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="search"
          value={value}
          onChange={changeHandle}
          placeholder="search..."
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
