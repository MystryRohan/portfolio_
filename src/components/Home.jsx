import { motion, animate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TypeWriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/me_alt.png";
const Home = () => {
  const projectCount = useRef(null);
  const animateProjectCount = () => {
    animate(0, 27, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <div className="home" id="home">
      <section>
        <motion.h1>
          Hi, I am <br />
          Rohan Mistry.
        </motion.h1>
        <TypeWriter
          options={{
            strings: ["A Developer", "A Designer", "A Creator"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriterpara",
            cursor: "",
          }}
        />
        <div>
          <div>
            <a href="mailto:mistryspandan0510@gmail.com">Hire Me</a>
            <a href="#work">
              Projects Done <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              <motion.span
                ref={projectCount}
                whileInView={animateProjectCount}
              ></motion.span>
            </p>
            <span>Projects Completed</span>
          </article>
        </div>
      </section>
      <section>
        <img src={me} alt="rohan" />
      </section>
    </div>
  );
};

export default Home;
