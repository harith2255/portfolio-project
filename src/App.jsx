import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />

      <Education />

      <Projects />

      <Technologies />

      <Contact />

      <>
        <p className="footer">&copy; 2025 All rights reserved</p>
      </>
    </div>
  );
}

export default App;
