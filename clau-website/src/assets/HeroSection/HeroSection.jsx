import React from "react"; // Add this at the top
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./HeroSection.css";

const Hero = () => {
  const [titles] = useState([
    "FrontEnd Dev, Big Ambitions",
    "Full-Stack in the Making",
    "Backend with Backbone",
    "React Ready",
    "Never Stop Evolving",
  ]);
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <>
      <Helmet>
        <title>Cuciureanu Claudiu - Web Developer</title>
        <meta
          name="description"
          content="Professional Full Stack Developer specializing in modern web applications. Let's build something amazing together!"
        />
        <meta
          property="og:title"
          content="Cuciureanu Claudiu - Web Developer"
        />
        <meta
          property="og:description"
          content="Professional Full Stack Developer specializing in modern web applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Cuciureanu Claudiu",
              "jobTitle": "Full Stack Developer",
              "url": "https://yourwebsite.com",
              "sameAs": [
                "https://linkedin.com/in/yourprofile",
                "https://github.com/yourprofile"
              ]
            }
          `}
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="tag-container">
                <span className="code-tag open">&lt;developer&gt;</span>
                <h1 className="name-title">
                  <span className="name-gradient">Cuciureanu</span>
                  <span className="name-gradient">Claudiu</span>
                </h1>
                <span className="code-tag close">&lt;/developer&gt;</span>
              </div>

              <div className="title-container">
                <p className="rotating-title">{titles[currentTitle]}</p>
              </div>

              <p className="hero-description">
                Crafting{" "}
                <span className="highlight">high-performance interfaces</span>{" "}
                through innovative solutions and{" "}
                <span className="highlight">clean code architecture</span>
              </p>
            </div>

            <div className="graphic-container">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                </div>
                <div className="code-content">
                  <span className="code-line keyword">const</span>
                  <span className="code-line">developer = {"{"}</span>
                  <span className="code-line">
                    {" "}
                    focus:{" "}
                    <span className="string">"Frontend Development"</span>,
                  </span>
                  <span className="code-line">
                    {" "}
                    stack: [<span className="number">"React"</span>,{" "}
                    <span className="number">"JavaScript"</span>,{" "}
                    <span className="number">"Node.js"</span>,
                    <span className="number">"DataBase"</span>],
                  </span>
                  <span className="code-line">
                    {" "}
                    philosophy:{" "}
                    <span className="string">
                      "Clean ...Stunning & Efficient Code"
                    </span>
                  </span>
                  <span className="code-line">{"}"};</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
