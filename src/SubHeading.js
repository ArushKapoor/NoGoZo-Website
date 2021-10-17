import React from "react";

function SubHeading({ title }) {
  return (
    <div
      className={`uppercase m-4 mb-0 cursor-pointer ${
        title === "Home"
          ? "text-blue-600 hover:text-blue-600"
          : "text-gray-500 hover:text-blue-400"
      }`}
    >
      {title}
    </div>
  );
}

export default SubHeading;
