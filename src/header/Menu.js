import React, { useCallback, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = React.useRef();

  const hambugerClickHandler = useCallback(() => {
    setIsOpen(!isOpen);
    myRef.current.classList.toggle("display-menu");
  }, [isOpen]);

  const listClickHandler = useCallback(
    (e) => {
      myRef.current.classList.toggle("display-menu");
      setIsOpen(!isOpen);
    },
    [isOpen]
  );
  return (
    <div className="header-menu">
      <ul
        onClick={(e) => {
          listClickHandler(e);
        }}
        ref={myRef}
      >
        <li id="movies">
          <NavLink
            exact
            to={{ pathname: "/", state: { genreId: 0 } }}
            activeClassName="active-menu"
          >
            Movies
          </NavLink>
        </li>
        <li id="tv">
          <NavLink
            exact
            to={{ pathname: "/tvshows/all", state: { genreId: 0 } }}
            activeClassName="active-menu"
          >
            TV Shows
          </NavLink>
        </li>
        <li id="people">
          <NavLink exact to="/people" activeClassName="active-menu">
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
        className={"hamburger-menu-icon"}
      />
    </div>
  );
}

export default Menu;
