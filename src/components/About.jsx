/** @format */

import React from "react";
import { FaCat } from "react-icons/fa";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#FFFBEB] text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-2/3">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#495579] ">
            About
          </p>
        </div>

        <p className="text-2xl mt-10">
          Hi, I am a second-year undergraduate majoring in Computer Science at
          McGill University in Montreal, QC. I have always been passionate about
          learning new things, whether coding a website from scratch or diving
          into all kinds of algorithms – I enjoy my time exploring any new
          technology! The topics I am most interested in are cryptography and
          machine learning. I hope to learn more about the fields as my study
          progresses.
        </p>
        <hr className="py-2"></hr>
        <div className="py-8 ">
          <a href="\myPets.png">
            <FaCat size={30} />
          </a>

          <p className="py-2">
            Aside: This has nothing to do with Computer Science but I just want
            to show you some pictures of my pets. <br></br>[I love Computer
            Science and my pets equally] <br></br>Click on the Cat Icon
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
