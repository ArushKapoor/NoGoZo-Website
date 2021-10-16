import React from "react";

function CarouselItem({ imgUrl }) {
  return (
    <img
      className="object-cover w-full h-32 mx-auto rounded-lg"
      src={imgUrl}
      alt="carouselItem"
    />
  );
}

export default CarouselItem;
