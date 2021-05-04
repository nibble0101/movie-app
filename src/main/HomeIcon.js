import React from "react";
import { Link } from "react-router-dom";

export default function HomeIcon(props) {
  return (
    <div className="home-icon-wrapper">
      <Link to={props.url} className="link" title={props.titleText}>
        <i class="fas fa-home"></i>
      </Link>
    </div>
  );
}
