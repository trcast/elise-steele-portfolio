import React from "react";

const ArticleCard = (props) => {
  return (
    <container className="flex flex-col justify-center items-center md:w-full m-auto ">
      <div className="flex flex-col w-11/12 h-auto justify-center items-center px-5 pb-10 md:flex-row md:justify-between">
        <div className="w-full h-40 md:w-96 md:h-96">
          <img
            src={`./assets/${props.image}`}
            className="h-full w-full object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col justify-start items-start w-fit mt-8 md:w-9/12 md:mt-0 md:ml-12 md:justify-around md:h-80 md:p-6">
          <div>
            <h1 className="font-fields text-4xl leading-6">{props.title}</h1>
            <h2 className="font-forma font-light text-md text-gray-500">
              {props.company}
            </h2>
          </div>
          <p className="font-forma mt-4 leading-5">{props.description}</p>
          <button className="py-2 px-6 mt-6 text-sm font-forma font-medium text-gray-900 focus:outline-none rounded-full border border-gray-900 hover:bg-black hover:text-white transition-all">
            <a href={props.link} target="blank">
              View Article
            </a>
          </button>
        </div>
      </div>
    </container>
  );
};

export default ArticleCard;
