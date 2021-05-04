import React from "react";
import { useLocation } from "react-router-dom";

export default function Error() {
  const { state } = useLocation();
  return (
    <div className="error">
      <p>
        <i className="fas fa-exclamation-triangle"></i>{" "}
        {state ? state.message : "Unknown error has occurred"}
      </p>
    </div>
  );
}
