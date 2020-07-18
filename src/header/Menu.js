import React, {useCallback, useState} from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = React.useRef();
  const hambugerClickHandler = useCallback(() => {
    setIsOpen(!isOpen);
    myRef.current.classList.toggle("display-menu");
  }, [isOpen]);
  const listClickHandler = useCallback((e) => {
    myRef.current.classList.toggle("display-menu");
    setIsOpen(!isOpen);

  }, [isOpen]);
  return (
    <div className="header-menu">
      <ul
        onClick={(e) => {
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
