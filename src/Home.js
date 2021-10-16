import React from "react";
import Carousel from "./Carousel";
import LatestNovels from "./LatestNovels";
import Novels from "./Novels";
import Subjects from "./Subjects";

function Home() {
  return (
    <div className="flex flex-col">
      {/* Caraousel */}
      <Carousel />

      {/* Subjects Card */}
      <Subjects />

      {/* Novels Card */}
      <Novels />

      {/* Latest Novels Card */}
      <LatestNovels />
    </div>
  );
}

export default Home;
