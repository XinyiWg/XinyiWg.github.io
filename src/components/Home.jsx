/** @format */

import React from "react";

import { FaCat } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#FFFBEB]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-lg sm:text-7xl font-bold text-[#263159]">
            Hey, Xinyi's here
          </h2>
          <p className="text-[#263159] py-4 max-w-md text-3xl">
            Nice to meet you :D
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#263159] cursor-pointer"
            >
              <span className="group-hover:rotate-45 duration-300">
                <FaCat size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          {/* <img
            src={cartoon}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
