import React from "react";
import Carousel from "./Carousel";
import BooksCollection from "./BooksCollection";
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

      {/* Featured Novels */}
      <BooksCollection title="Featured Novels" />

      {/* Latest Novels Card */}
      <BooksCollection title="Latest Novels Arrival" />

      {/* Recommended Books Section */}
      <BooksCollection title="Recommended NEET Books" />
    </div>
  );
}

export default Home;
