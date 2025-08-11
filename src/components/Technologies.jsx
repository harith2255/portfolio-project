import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const allTechnologies = [
  { icon: <SiJavascript color="#F7DF1E" /> },
  { icon: <SiHtml5 color="#e07033ff" /> },
  { icon: <SiCss3 color="#1572B6" /> },
  { icon: <SiReact color="#61DAFB" /> },
  { icon: <FaNodeJs color="#339933" /> },
  { icon: <SiExpress color="#000000" /> },
  { icon: <SiTailwindcss color="#06B6D4" /> },
  { icon: <SiMongodb color="#47A248" /> },
  { icon: <SiGit color="#F05032" /> },
  { icon: <SiPostman color="#FF6C37" /> },
  { icon: <DiVisualstudio color="#007ACC" /> },
];

const Technologies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technologies" className="technologies-section" ref={ref}>
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          Technologies I Use
        </motion.h1>
        <motion.div
          className="tech-row"
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          {allTechnologies.map(({ name, icon }) => (
            <motion.div
              key={name}
              className="tech-box"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              title={name}
              aria-label={name}
              role="img"
            >
              <div className="icon">{icon}</div>
              <span className="tech-name">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
