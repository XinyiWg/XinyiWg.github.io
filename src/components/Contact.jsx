/** @format */

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
          LinkedIn
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
          GitHub
        </>
      ),
      href: "https://github.com/XinyiWg",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
          Email
        </>
      ),
      href: "/email.html",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "/resume.pdf",
    //   style: "rounded-br-md",
    //   download: true,
    // },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[55%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-10px] hover:rounded-md duration-500 bg-[#495579]"
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-[#FFFBEB]"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
