import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function SocialIcons({ ulClassName, liClassName }) {
  return (
    <ul className={ulClassName}>
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
          href="https://www.upwork.com/freelancers/~012c65944a4dfd29e6"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiUpwork />
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
