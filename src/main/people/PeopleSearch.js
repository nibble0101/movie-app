import React from "react";

export default function PeopleSearch() {
  return (
    <div className="main-search">
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search Personalities..."
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
