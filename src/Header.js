import React from "react";
import { FiShoppingCart as ShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi/";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi/";

function Header() {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row justify-between">
        {/* Burger Icon */}
        <MenuIcon size="1.5rem" />

        {/* Image Logo */}
        <img
          className="object-contain w-24"
          src="https://nogozo.com/static/mainapp/img/logo.png"
          alt="logo"
        />

        {/* Shopping Basket */}
        <ShoppingCart size="1.5rem" />
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
