import React from "react";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi/";

function Searchbar() {
  return (
    <div className="flex flex-row bg-gray-200 h-10 items-center p-2 rounded-xl mt-4 md:my-auto md:w-full md:mx-6">
      <SearchIcon size="1.5rem" className="text-gray-500" />
      <input
        className="bg-transparent mx-1 p-2 w-full outline-none"
        type="text"
        placeholder="Search product"
      />
    </div>
  );
}

export default Searchbar;
