import React from "react";
import Carousel from "./Carousel";
import Subjects from "./Subjects";

function Home() {
  return (
    <div className="flex flex-col">
      {/* Caraousel */}
      <Carousel />

      {/* Subjects Card */}
      <Subjects />

      {/* Novels Carasouel */}
      {/* Items Caraousel */}
    </div>
  );
}

export default Home;
