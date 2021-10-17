import React, { useState } from "react";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi/";
import IconButton from "@mui/material/IconButton";
import Sidebar from "./Sidebar";
import Modal from "react-modal";
import Searchbar from "./Searchbar";
import HeaderLogo from "./HeaderLogo";
import ShoppingIcon from "./ShoppingIcon";

function HeaderMobile() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");

  return (
    <div className="flex flex-col p-4 sticky top-0 z-10 bg-white md:hidden">
      <div className="flex flex-row justify-between items-center">
        {/* Burger Icon */}
        <IconButton onClick={() => setModalIsOpen(true)}>
          <MenuIcon size="1.5rem" />
        </IconButton>

        {/* Image Logo */}
        <HeaderLogo />

        {/* Shopping Basket */}
        <ShoppingIcon />
      </div>
      <Searchbar />

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

export default HeaderMobile;
