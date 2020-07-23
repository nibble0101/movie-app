import React from "react";

export default function MovieSearch() {
  return (
    <div className="main-search">
      <form>
        <input type="text" name="search" placeholder="Movie Title..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
