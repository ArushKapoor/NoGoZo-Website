import React from "react";
import SubjectItem from "./SubjectItem";

function Subjects() {
  return (
    <div className="my-4 px-4 grid grid-rows-2 grid-cols-5 gap-5">
      {/* Creating an array of size 10, then filling it with 
            empty values, then we map through each value and display 
            a SubjectItem on the screen */}
      {Array(10)
        .fill()
        .map((_) => (
          <SubjectItem />
        ))}
    </div>
  );
}

export default Subjects;
