import React from "react";
import NovelItem from "./NovelItem";

function Novels() {
  return (
    <div>
      <h1 className="mx-4">Novels for you</h1>
      <div className="flex flex-row overflow-x-auto scrollbar-hide">
        <span className="ml-4"></span>
        {Array(5)
          .fill()
          .map((_) => (
            <NovelItem />
          ))}
      </div>
    </div>
  );
}

export default Novels;
