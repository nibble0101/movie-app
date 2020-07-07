import React, { useContext } from "react";
import Genre from "./genre/Genre";
import PagesDisplay from "./pages/PagesDisplay";
import DashBoardDisplay from "./dashboard/DashBoardDisplay";
import { context } from "../store/ContextProvider";

function Main(props) {
  const { generalConfig, activeMenu } = useContext(context);
  const config =
    generalConfig && activeMenu.movies
      ? generalConfig.movies
      : activeMenu.tv
      ? generalConfig.tv
      : null;
  return (
    <main className="main-section">
      {!activeMenu.people && config && <Genre config={config} />}
      <DashBoardDisplay />
      <PagesDisplay />
    </main>
  );
}

export default Main;
