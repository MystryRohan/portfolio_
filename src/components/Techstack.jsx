import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { AiOutlineChrome } from "react-icons/ai";
import { motion } from "framer-motion";

const Techstack = () => {
  const animations = {
    one: {
      x: "-50%",
      y: "-50%",
      opacity: 0,
    },
    two: {
      y: "-50%",
      opacity: 0,
    },
    three: {
      x: "50%",
      y: "-50%",
      opacity: 0,
    },
    four: {
      x: "-50%",
      y: "50%",
      opacity: 0,
    },
    five: {
      y: "50%",
      opacity: 0,
    },
    six: {
      x: "50%",
      y: "50%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="techstack" id="techstack">
      <h2>Techstack</h2>
      <motion.section>
        <motion.div
          initial={animations.one}
          whileInView={animations.whileInView}
        >
          <AiOutlineChrome color="#d61c4e" size={100} />
          <p>Web</p>
        </motion.div>
        <motion.div
          initial={animations.two}
          whileInView={animations.whileInView}
        >
          <FaNodeJs color="#d61c4e" size={100} />
          <p>Node Js</p>
        </motion.div>
        <motion.div
          initial={animations.three}
          whileInView={animations.whileInView}
        >
          <FaReact color="#d61c4e" size={100} />
          <p>React Js</p>
        </motion.div>
        <motion.div
          initial={animations.four}
          whileInView={animations.whileInView}
        >
          <FaJs color="#d61c4e" size={100} />
          <p>JavaScript</p>
        </motion.div>
        <motion.div
          initial={animations.five}
          whileInView={animations.whileInView}
        >
          <FaHtml5 color="#d61c4e" size={100} />
          <p>HTML</p>
        </motion.div>
        <motion.div
          initial={animations.six}
          whileInView={animations.whileInView}
        >
          <FaCss3 color="#d61c4e" size={100} />
          <p>CSS</p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Techstack;
