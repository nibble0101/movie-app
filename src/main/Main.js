import React from "react";
import Genre from "./genre/Genre";
import PagesDisplay from "./pages/PagesDisplay";
import DashBoardDisplay from "./dashboard/DashBoardDisplay";

function Main(props) {
  return (
    <main className="main-section">
      <Genre />
      <DashBoardDisplay />
      <PagesDisplay />
    </main>
  );
}

export default Main;
