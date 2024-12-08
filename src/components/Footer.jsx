import React from "react";

const Footer = ({ links }) => {
  return (
    <footer className="py-8 text-white bg-gray-900">
      <div className="container grid grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3 md:text-left">
        <div>
          <h3 className="text-xl font-bold">Nexcent</h3>
          <p className="mt-2 text-gray-400">Copyright © 2020 Nexcent ltd.</p>
        </div>
        {links.map((section, index) => (
          <div key={index}>
            <h4 className="mb-2 font-semibold">{section.title}</h4>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="text-gray-400 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
