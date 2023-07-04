import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function SocialIcons({ ulClassName, liClassName }) {
  return (
    <ul className={ulClassName}>
       <li className={liClassName}>
        <a
          href="https://fb.com/krochet94"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </li>
      <li className={liClassName}>
        <a
          href="https://www.linkedin.com/in/krochet94"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>

      <li className={liClassName}>
        <a
          href="https://twitter.com/krochet94"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </li>

      <li className={liClassName}>
        <a
          href="https://github.com/krochet94"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
