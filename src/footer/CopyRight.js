import React from "react";

function CopyRight(props) {
  const year = new Date().getFullYear();
  return (
    <div className="footer-copyright">
      <p>
        Copyright {"\u00A9"} Joe Nibble{" "}
        {`${year > 2020 ? "2020 - " + year : year}`}
      </p>
    </div>
  );
}

export default CopyRight;
