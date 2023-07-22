import React from "react";

const About = () => {
  return (
    <div className="flex flex-row justify-between items-start w-screen px-10 py-10 md:px-24 border-b border-t border-gray-900 cursor-default">
      <div className="flex flex-col md:w-11/12 w-full justify-start items-start">
        <h1 className="text-6xl font-fields mb-4">ABOUT ME</h1>
        <p className="font-forma mb-4">
          Elise Steele writes and copy edits content across all literary,
          rhetorical, and technical genres. While her creative background in
          poetry grants her an inventive style, her professional experience with
          local-news narratives and relocation guides hardens her technique and
          efficiency.
        </p>
        <p className="font-forma">
          Elise’s poetry can be found in multiple national literary magazines,
          including Dark River Review and Rainy Day. She has also written, copy
          edited, and published professional work with Homes.com and
          Chattanooga’s online news outlet, Rising Rock. Elise currently resides
          in Richmond, VA with her 20-pound cat, Kodak.
        </p>
      </div>
      <div className="md:w-6/12 h-96 justify-end items-end hidden md:flex">
        <img
          src="./assets/profile-2.jpg"
          alt=""
          className="h-full w-fit object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default About;
