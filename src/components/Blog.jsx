import React from "react";
import Card from "./card";

const Blog = ({ cards }) => {
  return (
    <div className="py-12 text-center">
      <h2 className="mb-4 text-3xl font-bold">Caring is the new marketing</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends, and more.
      </p>
      <div className="grid gap-6 mt-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
