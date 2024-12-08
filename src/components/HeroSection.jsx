import React from "react";

const HeroSection = ({ title, subtitle, buttonText, illustration }) => {
  return (
    <div className="flex flex-col items-center py-12 text-center bg-gray-50">
      <h1 className="text-4xl font-bold">
        {title} <span className="text-green-500">from 8 years</span>
      </h1>
      <p className="mt-4 text-gray-600">{subtitle}</p>
      <button className="px-6 py-3 mt-6 text-white bg-green-500 rounded">
        {buttonText}
      </button>
      <img src={illustration} alt="Illustration" className="mt-8 w-96" />
    </div>
  );
};

export default HeroSection;
