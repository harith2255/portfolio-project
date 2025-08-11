import { motion, inView } from "framer-motion";
import { FaCode } from "react-icons/fa";

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

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* CRUD App */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/crud.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>CRUD Master</h3>
          <p>
            CRUD Master is a modern web app for adding, editing, and deleting
            products with ease. Featuring image support, price management, and
            dark mode, it’s a stylish and efficient tool for managing
            inventories.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>TailwindCSS</span>
          </div>
          <div className="project-links">
            <a
              href="https://crash-course-1.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/harith2255/crash-course.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Github
            </a>
          </div>
        </motion.div>

        {/* Resume Builder */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/resume-builder.png')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Resume Builder</h3>
          <p>
            Resume Builder – A powerful tool to create professional,
            ATS-friendly resumes with ease. It offers live preview, customizable
            templates, quick downloads, and many more features to help you build
            a standout CV effortlessly.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
          <div className="project-links">
            <a
              href="https://resume-builder-frontend-po2y.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/harith2255/resume-builder.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Twitter Clone */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/twitter-clone.png')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>X Clone</h3>
          <p>
            X-Clone is a lightweight, customizable Twitter clone that allows
            users to post tweets, follow others, and engage in real-time
            conversations. It features a clean and responsive interface with
            essential social media functionalities, designed for quick
            deployment and easy scalability.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>TailwindCSS</span>
          </div>
          <div className="project-links">
            <a
              href="https://x-clone-ojov.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/harith2255/twitter-clone.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
