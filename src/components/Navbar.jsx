import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = ({ showNavBtn, setShowNavBtn }) => {
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
    <>
      <motion.h1 {...animations.h1} transition={{ delay: 0.3 }}>
        Mystry's
      </motion.h1>
      <motion.div {...animations.h1} transition={{ delay: 0.3 }}>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#techstack">Techstack</a>
        <a href="#about">About</a>
      </motion.div>
      <button onClick={() => setShowNavBtn(!showNavBtn)}>
        <BiMenuAltRight />
      </button>
    </>
  );
};

export default Navbar;
