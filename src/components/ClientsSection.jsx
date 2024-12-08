import React from "react";

const ClientsSection = ({ clients }) => {
  return (
    <div className="py-12 text-center bg-white">
      <h2 className="text-2xl font-bold">Our Clients</h2>
      <p className="mt-2 text-gray-600">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex flex-wrap justify-center mt-6 space-x-6">
        {clients.map((client, index) => (
          <img
            key={index}
            src={client}
            alt={`Client ${index + 1}`}
            className="w-20 h-20"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
