import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-start w-screen px-10 py-10 md:px-24 border-b border-t border-gray-900 cursor-default">
      <div className="flex flex-col w-12 justify-start items-start mb-20">
        <img src="./assets/es-logo.png" alt="" />
      </div>
      <div className="">
        <h1 className="text-2xl font-fields mb-2">ELISE STEELE</h1>
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faEnvelope} />
          <h2 className="text-md font-forma pl-2">esteelewrites@gmail.com</h2>
        </div>
        <a href="https://www.linkedin.com/in/elise-steele-24415b241/">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faLinkedin} />
            <h2 className="text-md font-forma pl-2">Elise Steele</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
