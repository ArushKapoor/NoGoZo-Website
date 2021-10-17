import React from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  return (
    <div>
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
}

export default Header;
