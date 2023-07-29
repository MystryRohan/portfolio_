import {
  FaInstagram,
  FaLinkedin,
  FaHackerrank,
  FaGithub,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
const Footer = () => {
  const animations = {
    h1: {
      initial: {
        y: "100%",
        opacity: 0,
      },

      whileInView: { y: 0, opacity: 1 },
    },
  };

  return (
    <footer id="about">
      <motion.div {...animations.h1}>
        <h4>Rohan Mistry</h4>
        <p>mistryspandan0510@gmail.com</p>
        <p>Dhule</p>
      </motion.div>

      <p>© Rohan Mistry</p>

      <motion.div {...animations.h1}>
        <a href="https://github.com/MystryRohan" target="blank">
          <FaGithub color="#dafffb" size={30} />
        </a>
        <a href="https://www.hackerrank.com/rohanmistry" target="blank">
          <FaHackerrank size={30} color="#dafffb" />
        </a>
        <a href="https://leetcode.com/rohanmistry" target="blank">
          <SiLeetcode size={30} color="#dafffb" />
        </a>
        <a href="https://linkedin.com/in/mistryrohan" target="blank">
          <FaLinkedin size={30} color="#dafffb" />
        </a>
        <a href="https://instagram.com/mystry_r" target="blank">
          <FaInstagram size={30} color="#dafffb" />
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
