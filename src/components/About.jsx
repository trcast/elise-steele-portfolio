import React from "react";

const About = () => {
  return (
    <div className="flex flex-row justify-between items-start w-screen px-10 py-10 md:px-24 border-b border-t border-gray-900 cursor-default">
      <div className="flex flex-col md:w-11/12 w-full justify-start items-start">
        <h1 className="text-6xl font-fields mb-4">ABOUT ME</h1>
        <p className="font-forma">
          High fidelity wireframes include more real content, specific
          typography choices, and information on image dimensions. Unlike low
          fidelity wireframes, high fidelity wireframes can include actual
          images. Color choices are not included, but different values in color
          can be represented in grayscale.
        </p>
        <p className="font-forma mt-4">
          High fidelity wireframes include more real content, specific
          typography choices, and information on image dimensions. Unlike low
          fidelity wireframes, high fidelity wireframes can include actual
          images. Color choices are not included, but different values in color
          can be represented in grayscale.
        </p>
        <p className="font-forma mt-4">
          I'm adding this to see if I did it right wooooo!
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
