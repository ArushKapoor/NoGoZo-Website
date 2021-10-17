import React from "react";
import {
  AiOutlineHome as HomeIcon,
  AiOutlineHeart as HeartIcon,
} from "react-icons/ai/";

import {
  BsFillBookmarkDashFill as BookmarkIcon,
  BsPerson as ProfileIcon,
} from "react-icons/bs/";

function Footer() {
  return (
    <div className="flex justify-around bg-white p-4 fixed bottom-0 w-full md:hidden">
      <HomeIcon className="text-3xl text-blue-400" />
      <HeartIcon className="text-3xl text-gray-400" />
      <BookmarkIcon className="text-3xl text-gray-400" />
      <ProfileIcon className="text-3xl text-gray-400" />
    </div>
  );
}

export default Footer;
