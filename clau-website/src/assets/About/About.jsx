import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
} from "react-icons/si";
import profileImage from "../Images/ImageWebsite.jpg";
import "./About.css";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <SiGithub />, name: "GitHub", color: "#181717" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="content-wrapper">
          <motion.div
            className="profile-column"
            initial={{ scale: 0.95 }}
            animate={{ scale: isInView ? 1 : 0.95 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="profile-card">
              <div
                className="profile-image"
                style={{ backgroundImage: `url(${profileImage})` }}
              ></div>
            </div>
          </motion.div>

          <div className="content-column">
            <motion.div
              className="text-content"
              initial={{ y: 20 }}
              animate={{ y: isInView ? 0 : 20 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="section-title">
                Frontend Developer
                <span className="subtitle">with Fullstack Experience</span>
              </h2>

              <p className="bio-text">
                Crafting <span className="highlight">responsive</span> and{" "}
                <span className="highlight">intuitive interfaces</span> through
                modern web technologies. I bridge the gap between{" "}
                <span className="highlight">design</span> and{" "}
                <span className="highlight">implementation</span>, delivering
                seamless user experiences across all platforms.
              </p>
            </motion.div>

            <div className="skills-carousel">
              <div className="carousel-track">
                {/* Duplicate the skills array for seamless looping */}
                {[...skills, ...skills].map((skill, i) => (
                  <div
                    key={`${skill.name}-${i}`}
                    className="skill-card"
                    data-skill={skill.name}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
