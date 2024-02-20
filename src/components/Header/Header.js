import React, { useState, useEffect } from "react";

import "./Header.css"
import Navbar from "./Navbar";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

function Header({scrolling}) {

  var [isBurger, setIsBurger] = useState(false);
  var [isNav, setIsNav] = useState(false);
  var [isSearchBar, setIsSearchBar] = useState(false);
  var [isScreenSize, setIsScreenSize] = useState(0);

  

  const { width } = useWindowSize();

  //Nav button-----------------------------------
  var handleClickOnBurger = () => {
    setIsBurger((prevIsBurger) => !prevIsBurger);
    setIsNav((prevIsNav) => !prevIsNav);
  }


  //-----------------------------------------------
  //Search bar ------------------------
  var handleClickOnSearch = () => {
    setIsSearchBar((prevIsSearchbar) => !prevIsSearchbar)
  }
  //-----------------------------------
  function checkWidth() {
    if (isScreenSize >= 768) {
      setIsSearchBar(false);
      setIsBurger(false);
      setIsNav(true);
    }
  }

  useEffect(() => {
    setIsScreenSize(width);
    checkWidth();
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between align-items-center py-md-4 px-md-5 my-3 shadow-sm headerBody">
      <Navbar callFunc={handleClickOnBurger} btnHook={isBurger} navHook={isNav}
      scroller={scrolling}
      />
      {!isSearchBar && <Logo />}
      <Searchbar callFunc={handleClickOnSearch} btnHook={isSearchBar} />
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount


  return windowSize;
}



export default Header;



