import React from "react";
import TvDashBoard from "./TvDashBoard";

export default function TvSearchResults(props) {
  const { tvData, value } = props;

  const regx = new RegExp("^" + value, "mig");
  const filteredMovieData = tvData.filter((tvShow) => regx.test(tvShow.original_name));

  return (
    <>
      <p style={{ textAlign: "center", padding: "1em" }}> Search Results </p>
      <TvDashBoard {...props} tvData={filteredMovieData} />
    </>
  );
}
