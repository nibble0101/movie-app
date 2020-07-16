import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { context } from "./store/ContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { loading } = React.useContext(context);
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
