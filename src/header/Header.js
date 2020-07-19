import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SharePage from "../footer/SharePage";
function Header() {
  return (
    <header className="header">
      <Logo />
      <SharePage />
      <Menu />
    </header>
  );
}
export default Header;
