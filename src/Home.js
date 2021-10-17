import React from "react";
import Carousel from "./components/carousel/Carousel";
import BooksCollection from "./components/collection/BooksCollection";
import Novels from "./components/collection/Novels";
import Subjects from "./components/subject/Subjects";
import Footer from "./Footer";

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

      {/* Extra Space */}
      <div className="mb-24"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
