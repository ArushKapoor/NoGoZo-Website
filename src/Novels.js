import React from "react";
import Heading from "./Heading";
import NovelItem from "./NovelItem";

function Novels() {
  return (
    <div>
      <Heading title="Novels for you" />
      <div className="flex flex-row overflow-x-auto scrollbar-hide md:my-4">
        <span className="ml-4 md:ml-6"></span>
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
