import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Navbar from "./Navbar";
import PhoneNav from "./PhoneNav";

const Header = () => {
  const { scrollY } = useScroll();
  const [showNavBtn, setShowNavBtn] = useState(false);
  const y1 = useTransform(scrollY, [500, 0], [200, 10]);
  const y2 = useTransform(scrollY, [600, 0], [100, 250]);

  // const hideHandler = () => {
  //   const header = document.getElementsByClassName("header");      onViewportLeave={hideHandler}
  //   const nav = document.getElementsByClassName("nav");
  //   header[0].style.display = "none";
  //   nav[0].style.position = "fixed";
  // };
  //
  // console.log(showNavBtn);
  return (
    <>
      <motion.div className="header">
        <motion.h1 style={{ y: y1 }}>Portfolio</motion.h1>
        <motion.p style={{ y: y1 }}>Rohan Mistry.</motion.p>
        <motion.span style={{ y: y2 }}>
          <BiChevronDown size={35} className="scroll-icon" />
        </motion.span>
      </motion.div>

      <PhoneNav showNavBtn={showNavBtn} setShowNavBtn={setShowNavBtn} />
      <motion.nav className="nav">
        <Navbar showNavBtn={showNavBtn} setShowNavBtn={setShowNavBtn} />
      </motion.nav>
    </>
  );
};

export default Header;
