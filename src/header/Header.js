import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "../styles/Header.css";
function Header() {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
}
export default Header;
