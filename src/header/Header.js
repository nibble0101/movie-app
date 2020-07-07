import React, {useContext} from "react";
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';


function Header(props) {
  return (
    <header className = 'header'>
      <Logo />
      <Search />
      <Menu />
    </header>
  );
}

export default Header;
