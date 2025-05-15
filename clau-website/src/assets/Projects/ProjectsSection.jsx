import { useRef, useState, useEffect } from "react";
import { projects } from "../data/projectsData";
import { motion, useInView } from "framer-motion";
import "./ProjectsSection.css";

export default function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState({});
  const videoRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleElements((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-100px",
      }
    );

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video play failed:", error);
        });
      }
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&enablejsapi=1`
      : null;
  };

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <div className="container-custom">
        <motion.h2
          ref={titleRef}
          className={`projects-title animate-on-scroll ${
            visibleElements["projects-title"] ? "visible" : ""
          }`}
          id="projects-title"
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card animate-on-scroll ${
                visibleElements[`project-${project.id}`] ? "visible" : ""
              }`}
              id={`project-${project.id}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="project-preview">
                {project.video ? (
                  project.video.includes("youtube.com") ? (
                    <iframe
                      className="project-video"
                      src={getYouTubeEmbedUrl(project.video)}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="project-video"
                      src={project.video}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadedData={() => {
                        const video = videoRefs.current[index];
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    />
                  )
                ) : (
                  <img
                    className="project-video"
                    src={project.image}
                    alt={project.title}
                  />
                )}
                <div className="hover-text">Hover me to play</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.demo}
                    className="project-link demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="project-link code-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
