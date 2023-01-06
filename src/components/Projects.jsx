/** @format */

import React from "react";
import tbu from "../assets/texture.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: tbu,
    },
  ];

  return (
    <div name="projects" className="w-full h-screen bg-[#FFFBEB] text-black ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#495579]">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
