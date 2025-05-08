import { HelmetProvider } from "react-helmet-async";
import LightningBg from "./assets/Backgrounds/LightningBg.jsx";
import Navbar from "./assets/navbar/Navbar.jsx";
import HeroSection from "./assets/HeroSection/HeroSection.jsx";
import About from "./assets/About/About.jsx";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
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
          <HeroSection />
          <About />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
