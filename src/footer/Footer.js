import React from "react";
import Logo from "./Logo";
import SharePage from "./SharePage";
import CopyRight from "./CopyRight";
import MazeLogo from "../header/Logo";
import "../styles/Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__top-bar">
        <Logo />
        <MazeLogo />
        <SharePage />
      </div>
      <div className="footer__bottom-bar">
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;
