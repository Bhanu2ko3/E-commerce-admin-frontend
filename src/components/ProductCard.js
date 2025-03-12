import React from "react";

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-secondary font-semibold">${price}</p>
      <button className="bg-primary text-white px-4 py-2 mt-3 rounded-lg">
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
