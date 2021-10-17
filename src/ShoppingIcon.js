import React from "react";
import IconButton from "@mui/material/IconButton";
import { FiShoppingCart as ShoppingCart } from "react-icons/fi";

function ShoppingIcon() {
  return (
    <div className="bg-gray-100 md:bg-transparent rounded-full">
      <IconButton>
        <ShoppingCart className="text-lg md:text-2xl" />
      </IconButton>
    </div>
  );
}

export default ShoppingIcon;
