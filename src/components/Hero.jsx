import { motion, rgba } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
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
const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {" "}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> Hello,I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Harith K P
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            MERN Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Aspiring MERN Stack Developer skilled in building responsive and
            user-friendly web applications using MongoDB, Express.js, React, and
            Node.js. Eager to apply clean coding practices and problem-solving
            skills to deliver scalable solutions in a collaborative environment.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              Contact Me
            </motion.a>
            {/* Resume Download Button */}
            <motion.a
              href="/harith-kp-resume.pdf"
              download
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i
                className="fas fa-download"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Resume
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/harith2255" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/harith-kp"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/__hxrithh__"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Harith K P",
  origin: "🌍 India",
  role: "MERN Stack Developer",
  stack: {
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["React", "Node.js", "Express.js", "TailwindCSS"],
    databases: ["MongoDB"],
    tools: ["Git", "Postman", "VS Code"],
  },
  traits: [
    "clean code craftsman",
    "UI/UX mindful",
    traits: [
    "clean code craftsman",
    "UI/UX mindful",
    "problem-solver by nature",
  ],
    
  ],
  missionStatement:
    "Building full-stack web apps that are functional, and user-focused.",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">🖥️</span>
              <span className="card-text"> Currently Working on a Project</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
