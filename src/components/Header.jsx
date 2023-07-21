import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-screen px-10 py-8 md:px-24 border-b border-gray-900 cursor-default">
        <h1 className="font-fields">ELISE STEELE</h1>
        <div className="flex flex-col w-full justify-start items-start pt-48">
          <h1 className="text-7xl font-fields">WRITER & EDITOR</h1>
          <p className="text-sm font-forma">little bio goes here</p>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-fields px-10 py-10 md:px-24 cursor-default">
          RECENT WORK
        </h1>
      </div>
    </>
  );
};

export default Header;
