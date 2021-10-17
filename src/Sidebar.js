import React from "react";
import SidebarIcon from "./SidebarIcon";
import {
  MdContacts as ProfileIcon,
  MdCollectionsBookmark as CouponsIcon,
  MdFace as FavouritesIcon,
  MdHelpCenter as HelpIcon,
  MdBugReport as BugIcon,
  MdStars as RateIcon,
} from "react-icons/md/";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaTruck as OrdersIcon } from "react-icons/fa/";
import { AiFillLike as ShareIcon } from "react-icons/ai/";

function Sidebar() {
  return (
    <div
      className="flex flex-col fixed w-full z-50 top-0 left-0 h-full"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="bg-white w-80 h-full">
        {/* Image Logo */}
        <img
          className="object-contain w-full"
          src="https://nogozo.com/static/mainapp/img/logo.png"
          alt="logo"
        />
        <hr className="bg-black my-6" />
        <SidebarIcon icon={ProfileIcon} name="Profile" />
        <SidebarIcon icon={LocationOnIcon} name="Address" />
        <SidebarIcon icon={OrdersIcon} name="Orderss" />
        <hr className="bg-black my-6" />
        <SidebarIcon icon={CouponsIcon} name="Coupons" />
        <SidebarIcon icon={FavouritesIcon} name="Favourites" />
        <hr className="bg-black my-6" />
        <SidebarIcon icon={ShareIcon} name="Share App" />
        <SidebarIcon icon={HelpIcon} name="Help" />
        <SidebarIcon icon={BugIcon} name="Report an issue" />
        <SidebarIcon icon={RateIcon} name="Rate App" />
      </div>
    </div>
  );
}

export default Sidebar;
