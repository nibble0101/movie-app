import React, { useContext } from "react";
import { context } from "../store/ContextProvider";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";

function Menu(props) {
  const { menuClickHandler } = useContext(context);
  const [isOpen, setIsOpen] = React.useState(false);
  const myRef = React.useRef();
  const hambugerClickHandler = React.useCallback(() => {
    setIsOpen(!isOpen);
    myRef.current.classList.toggle("display-menu");
    //myRef will be undefined if you nest it in Zoom
    //Use document.getElementById if you want to wrap movie component in Zoom component
  });
  const listClickHandler = React.useCallback((e) => {
    myRef.current.classList.toggle("display-menu");
    setIsOpen(!isOpen);

  });
  return (
    <div className="header-menu">
      <ul
        onClick={(e) => {
          menuClickHandler(e);
          listClickHandler(e);
        }}
        ref={myRef}
      >
        <li id="movies">
          <Link to = "/movies"> Movies </Link>
        </li>
        <li id="tv">
          <Link to = "/tvshows">TV Shows</Link>
        </li>
        <li id="people">
          <Link to = "/people">People</Link>
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
