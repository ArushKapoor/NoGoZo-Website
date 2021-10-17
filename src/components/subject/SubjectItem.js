import React from "react";

function SubjectItem() {
  return (
    <div className="flex flex-col items-center w-14 md:w-28">
      <img
        className="bg-blue-200 p-2 object-contain rounded-lg"
        src="./images/9.png"
        alt="Class IX"
      />
      <span className="mt-2 text-xs text-gray-500">Class IX</span>
    </div>
  );
}

export default SubjectItem;
