import React, { useState } from "react";
import { FiShoppingCart as ShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi/";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi/";
import IconButton from "@mui/material/IconButton";
import Sidebar from "./Sidebar";
import Modal from "react-modal";

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");

  return (
    // <div className="flex flex-col p-4 sticky top-0 z-10 bg-white">
    <div className="flex flex-col p-4 bg-white">
      <div className="flex flex-row justify-between items-center">
        {/* Burger Icon */}
        <IconButton onClick={() => setModalIsOpen(true)}>
          <MenuIcon size="1.5rem" />
        </IconButton>

        {/* Image Logo */}
        <img
          className="object-contain w-24"
          src="https://nogozo.com/static/mainapp/img/logo.png"
          alt="logo"
        />

        {/* Shopping Basket */}
        <div className="bg-gray-100 rounded-full">
          <IconButton>
            <ShoppingCart size="1.1rem" />
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

      {/* <Sidebar /> */}
      <Modal
        className="flex flex-col fixed z-50 top-0 left-0 h-full"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        }}
      >
        <Sidebar />
      </Modal>
    </div>
  );
}

export default Header;
