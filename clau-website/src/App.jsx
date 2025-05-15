import { Helmet } from "react-helmet-async";
import { Suspense, lazy } from "react";
import LightningBg from "./assets/Backgrounds/LightningBg.jsx";
import Navbar from "./assets/navbar/Navbar.jsx";
import "./App.css";

// Lazy load components for better performance
const HeroSection = lazy(() => import("./assets/HeroSection/HeroSection.jsx"));
const About = lazy(() => import("./assets/About/About.jsx"));
const Projects = lazy(() => import("./assets/Projects/ProjectsSection.jsx"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <>
      <Helmet>
        <title>Claudiu Cuciureanu - Personal Website</title>
        <meta
          name="description"
          content="Welcome to my personal website. I'm a passionate developer creating amazing things."
        />
        <meta
          name="keywords"
          content="developer, portfolio, web development, React, JavaScript"
        />
        <meta
          property="og:title"
          content="Claudiu Cuciureanu - Personal Website"
        />
        <meta
          property="og:description"
          content="Welcome to my personal website. I'm a passionate developer creating amazing things."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mywebsite-36386.web.app" />
      </Helmet>

      <div className="app-container">
        {/* Background Layer */}
        <div className="background-container">
          <LightningBg
            hue={250}
            xOffset={-0.5}
            speed={0.8}
            intensity={0.35}
            size={1.2}
          />
        </div>

        {/* Content Layer */}
        <div className="content-layer">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <HeroSection />
            <About />
            <Projects />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
