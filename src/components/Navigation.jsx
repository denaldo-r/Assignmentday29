import React from "react";

const Navigation = ({ navLinks, loginText, signUpText }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gray-50">
      <div className="text-2xl font-bold text-green-600">Nexcent</div>
      <ul className="flex space-x-6">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="text-gray-600 cursor-pointer hover:text-green-600"
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="flex space-x-4">
        <button className="text-gray-600">{loginText}</button>
        <button className="px-4 py-2 text-white bg-green-500 rounded">
          {signUpText}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
