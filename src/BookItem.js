import React from "react";

function BookItem({ imgUrl, name, originalPrice, newPrice, discount }) {
  return (
    <div className="flex flex-col items-start my-4 md:my-6 mr-4 md:mr-6">
      <div className="py-4 md:py-6 px-8 bg-gray-100 rounded-xl w-32 md:w-44">
        <img className="object-contain" src={imgUrl} alt={name} />
      </div>
      <span className="my-2">{name}</span>
      <div>
        <span className="mr-2 text-blue-500">₹{newPrice}</span>
        <span className="text-gray-500 line-through">₹{originalPrice}</span>
      </div>
      <span className="text-green-500">{discount} % off</span>
    </div>
  );
}

export default BookItem;
