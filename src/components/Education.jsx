import { motion, inView } from "framer-motion";

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

const educationData = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Sahrdaya College of Advanced Studies",
    year: "2022 - 2025",
    description:
      "Studying core computer science subjects including software development, data structures, and UI/UX design.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "CJMA HSS Varandarapilly",
    year: "2020 - 2022",
    description:
      "Focused on Computer Science stream with emphasis on programming fundamentals, algorithms, and computational problem-solving.",
  },
  {
    degree: "Secondary School Education",
    institution: "SNVMCS Kodaly",
    year: "2019 - 2020",
    description:
      "Completed foundational education with excellent academic performance.",
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="education"
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
        Education
      </motion.h2>

      <motion.div
        className="education-list"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <span className="year">{edu.year}</span>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
