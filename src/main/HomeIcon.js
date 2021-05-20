import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeIcon.css";

export default function HomeIcon(props) {
  return (
    <div className="home-icon-wrapper">
      <Link to={props.url} className="link" title="To Home Page">
        <i className="fas fa-home"></i>
      </Link>
    </div>
  );
}
