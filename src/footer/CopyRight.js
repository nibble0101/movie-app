import React from "react";

function CopyRight(props) {
  const year = new Date().getFullYear();
  return (
    <p>
      Copyright {"\u00A9"} Joseph Mawa{" "}
      {`${year > 2020 ? "2020 - " + year : year}`}
    </p>
  );
}

export default CopyRight;
