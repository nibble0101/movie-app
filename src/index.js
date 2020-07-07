import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./store/ContextProvider";

const Wrapper = () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  root
);
