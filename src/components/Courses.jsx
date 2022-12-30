/** @format */

import React from "react";

import { FaCat } from "react-icons/fa";

const Courses = () => {
  return (
    <div name="courses" className=" bg-[#FFFBEB] text-black ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#495579]">
            Courses
          </p>
        </div>
        <div class="">
          <div className="text-2xl">
            <a href="Counting.html">
              <u>Math 240 Discrete Structure</u>
              <br></br>
            </a>
            Math 222 Calculus 3<br></br>
            Math 323 Probability<br></br>
            Comp 250 Intro to Computer Scienc (Java, Data Structures and
            Algorithms)<br></br>
            <a href="Counting.html">
              <u>
                {" "}
                Comp 206 Intro to Software System (Unix, Bash, Git and C
                Programming)
              </u>
              <br></br>
            </a>
          </div>
          <div className="py-8 ">
            <FaCat size={30} />
            <p className="py-2">
              Hey, click the underlined text to check my notes or some tips on
              how to study that course. Hope it helps!
            </p>
          </div>
        </div>
        {/* <p className="text-xl">
            <div>
              {" "}
              <a href="Counting.html">
                Math 240 Discrete Structure <FaCat />
                <br></br>
              </a>
            </div> */}
        {/* <div>02</div>
            Math 222 Calculus 3<br></br>
            Math 323 Probability<br></br>
            Comp 250 Intro to Computer Scienc (Java, Data Structures and
            Algorithms)<br></br>
            Comp 206 Intro to Software System (Unix, Bash, Git and C
            Programming)
          </p> */}
      </div>
    </div>
  );
};

export default Courses;
