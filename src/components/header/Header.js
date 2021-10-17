import React from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { useStateValue } from "../react-context-api/StateProvider";

function Header() {
  const [{ isModalOpen }] = useStateValue();
  return (
    <div className={`${isModalOpen ? "overflow-hidden" : "sticky top-0 z-10"}`}>
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
}

export default Header;
