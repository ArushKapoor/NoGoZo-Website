import React from "react";
import BookItem from "./BookItem";
import Heading from "./Heading";

function BooksCollection({ title }) {
  return (
    <div>
      <Heading title={title} />
      <div className="flex overflow-x-auto scrollbar-hide">
        <span className="ml-4 md:ml-6"></span>
        {Array(10)
          .fill()
          .map((_) => (
            <BookItem
              imgUrl="https://m.media-amazon.com/images/I/61au0pWn-6L._AC_UY436_FMwebp_QL65_.jpg"
              name="The Art of Thinking Clearly"
              originalPrice="450"
              newPrice="225"
              discount="50"
            />
          ))}
      </div>
    </div>
  );
}

export default BooksCollection;
