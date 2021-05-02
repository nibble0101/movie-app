import React from "react";

function SharePage(props) {
  return (
    <p>
      Share:
      <a href="https://facebook.com/">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com/?lang=en">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.whatsapp.com/">
        <i className="fab fa-whatsapp"></i>
      </a>
    </p>
  );
}

export default SharePage;
