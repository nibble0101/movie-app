import React from "react";

export default function TvSearch() {
  return (
    <div className="main-search">
      <form>
        <input type="text" name="search" placeholder="search..." />
        <input type = "submit" value = "Search" />
      </form>
    </div>
  );
}
