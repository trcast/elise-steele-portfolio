import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto border-b border-gray-900 px-10 py-4 md:px-24">
        <img
          src="./assets/es-logo.png"
          alt="ES Typeface Logo"
          className="w-8 cursor-pointer"
        />
        <div>
          <ul className="flex flex-row justify-center items-center text-lg font-fields text-gray-900">
            <li className="pr-4 cursor-pointer hover:text-gray-500 transition-all">
              WORK
            </li>
            <li className="pr-4 cursor-pointer hover:text-gray-500 transition-all">
              ABOUT
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-all">
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
