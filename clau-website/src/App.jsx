// import { Helmet } from "react-helmet-async";
import { Suspense, lazy } from "react";
import LightningBg from "./assets/Backgrounds/LightningBg.jsx";
import Navbar from "./assets/navbar/Navbar.jsx";
import "./App.css";
const Contact = lazy(() => import("./assets/Contact/ContactSection.jsx"));
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
            <Contact />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
