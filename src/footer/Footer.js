import React from "react";
import Logo from "./Logo";
import SharePage from "./SharePage";
import CopyRight from "./CopyRight";
import MazeLogo from "../header/Logo";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="logo-sharepage-wrapper">
        <Logo />
        <MazeLogo />
        <SharePage />
      </div>
      <CopyRight />
    </footer>
  );
}

export default Footer;
