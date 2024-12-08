import React from "react";

const FeaturesSection = ({ features }) => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center">
        Manage your entire community in a single system
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Who is Nexcent suitable for?
      </p>
      <div className="flex flex-wrap justify-center mt-8 space-x-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 text-center bg-white rounded shadow-md w-72"
          >
            <div className="mb-4 text-3xl text-green-500">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
