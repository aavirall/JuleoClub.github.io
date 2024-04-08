import React, { useEffect, useState, useContext } from "react";
import logo from "../assets/logo.svg";
import cross from "../assets/cross.svg"
import hamburger from "../assets/hamburger.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { CSSTransition } from "react-transition-group";
import { mediumScreen } from "./utils";
import GlobalStateContext from "./GlobalStateContext";

function Header2() {
  const { width } = useWindowDimensions();
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const globalStateContext = useContext(GlobalStateContext)
  const scrollToAboutUs = () => globalStateContext.AboutUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const scrollToTeam = () => globalStateContext.TeamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const scrollToContact = () => globalStateContext.ContactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })


  return (
    <header className="sticky flex px-5 py-4 md:px-[120px] md:py-8 h-[68px] md:h-[136px] box_shadow_bot z-30">
      {/* <img className="h-10 w-16 md:h-16 md:w-24" src={logo} alt="" /> */}
      <a href="/">
        <img className="h-10 w-16 md:h-16 md:w-24" src={logo} alt="" />
      </a>
      <nav className="ml-auto">
          <button className="text-sm md:text-lg text-gray-80 hover:text-wine-100 mx-2">
            <a href="/terms">Terms And Conditions</a>
          </button>
          <button className="text-sm md:text-lg text-gray-80 hover:text-wine-100 mx-2">
            <a href="/privacy">Privacy Policy</a>
          </button>
          <button className="text-sm md:text-lg text-gray-80 hover:text-wine-100 mx-2">
            <a href="/delete">Delete Account</a>
          </button>
        </nav>
    </header>
  );
}


export default Header2;