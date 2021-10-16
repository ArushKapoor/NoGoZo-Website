import React from "react";
import BookItem from "./BookItem";

function LatestNovels() {
  return (
    <div>
      <span className="ml-4">Latest Novels Arrival</span>
      <div className="flex overflow-x-auto scrollbar-hide">
        <span className="ml-4"></span>
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

export default LatestNovels;
