import React from "react";
import { FiShoppingCart as ShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi/";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi/";
import IconButton from "@mui/material/IconButton";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function Header() {
  return (
    <div className="flex flex-col p-4 sticky top-0 z-10 bg-white">
      <div className="flex flex-row justify-between items-center">
        {/* Burger Icon */}
        <MenuIcon size="1.5rem" />

        {/* Image Logo */}
        <img
          className="object-contain w-24"
          src="https://nogozo.com/static/mainapp/img/logo.png"
          alt="logo"
        />

        {/* Shopping Basket */}
        <div className="bg-gray-100 rounded-full">
          <IconButton>
            <ShoppingCart size="0.9rem" />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-row bg-gray-200 h-10 items-center p-2 rounded-xl mt-4">
        <SearchIcon size="1.5rem" className="text-gray-500" />
        <input
          className="bg-transparent mx-1 p-2 w-full outline-none"
          type="text"
          placeholder="Search product"
        />
      </div>
    </div>
  );
}

export default Header;
