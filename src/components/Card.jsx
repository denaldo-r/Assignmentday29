import React from "react";

const Card = ({ image, title, description, linkText }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <a href="#" className="inline-block mt-4 font-medium text-green-600">
          {linkText} →
        </a>
      </div>
    </div>
  );
};

export default Card;
