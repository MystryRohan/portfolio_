import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
const PhoneNav = ({ showNavBtn, setShowNavBtn }) => {
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
    <div className={`phonenav ${showNavBtn ? "navSlidesIn" : ""}`}>
      <motion.h1 {...animations.h1} transition={{ delay: 0.3 }}>
        Mystry's
      </motion.h1>
      <div>
        <a onClick={() => setShowNavBtn(!showNavBtn)} href="#home">
          Home
        </a>
        <a onClick={() => setShowNavBtn(!showNavBtn)} href="#work">
          Work
        </a>
        <a onClick={() => setShowNavBtn(!showNavBtn)} href="#techstack">
          Techstack
        </a>
        <a onClick={() => setShowNavBtn(!showNavBtn)} href="#about">
          About
        </a>
      </div>
      <AiFillCloseCircle
        color="#00233c"
        size={30}
        onClick={() => setShowNavBtn(!showNavBtn)}
      />
    </div>
  );
};

export default PhoneNav;
