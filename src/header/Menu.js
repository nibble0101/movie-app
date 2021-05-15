import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = React.useRef();

  const hambugerClickHandler = () => {
    setIsOpen(!isOpen);
    myRef.current.classList.toggle("header__display-menu");
  };

  const listClickHandler = () => {
    myRef.current.classList.toggle("header__display-menu");
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <ul
        onClick={(e) => {
          listClickHandler(e);
        }}
        ref={myRef}
        className="header__menu"
      >
        <li id="movies" className="header__menu-item">
          <NavLink exact to="/" className="link link--menu-link">
            Movies
          </NavLink>
        </li>
        <li id="tv" className="header__menu-item">
          <NavLink exact to="/tv" className="link link--menu-link">
            TV Shows
          </NavLink>
        </li>
        <li id="people" className="header__menu-item">
          <NavLink exact to="/people" className="link link--menu-link">
            People
          </NavLink>
        </li>
      </ul>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={hambugerClickHandler}
        width={18}
        height={10}
        strokeWidth={2}
        color={"brown"}
        className="header__hamburger-menu-icon"
      />
    </div>
  );
}

export default Menu;
