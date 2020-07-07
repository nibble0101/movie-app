import React, { useContext } from "react";
import { context } from "../store/ContextProvider";
import HamburgerMenu from "react-hamburger-menu";

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
    const { id } = e.target;
    if (id === "movies" || id === "tv" || id === "people") {
      myRef.current.classList.toggle("display-menu")
      setIsOpen(!isOpen);
    }
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
        <li id="movies">Movies </li>
        <li id="tv">TV Shows</li>
        <li id="people">People</li>
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
