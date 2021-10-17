import React from "react";

function SidebarIcon({ icon, name }) {
  const Icon = icon;
  return (
    <div className="flex items-center mx-4 my-6">
      <Icon size="1.5rem" />
      <span className="ml-2 text-gray-500">{name}</span>
    </div>
  );
}

export default SidebarIcon;
