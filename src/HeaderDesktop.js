import React from "react";
import Searchbar from "./Searchbar";
import HeaderLogo from "./HeaderLogo";
import ShoppingIcon from "./ShoppingIcon";
import SubHeading from "./SubHeading";

function HeaderDesktop() {
  return (
    <div className="md:flex flex-col p-4 sticky top-0 z-10 bg-white hidden">
      <div className="flex items-center justify-between ">
        <HeaderLogo />
        <Searchbar />
        <ShoppingIcon />
      </div>
      <div className="flex justify-center">
        <SubHeading title="Home" />
        <SubHeading title="My Orders" />
        <SubHeading title="My Offers" />
        <SubHeading title="TNC" />
        <SubHeading title="Contact Us" />
        <SubHeading title="Log in" />
      </div>
    </div>
  );
}

export default HeaderDesktop;
