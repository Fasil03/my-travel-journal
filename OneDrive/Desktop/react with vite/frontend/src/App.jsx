import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import useTheme from "./hooks/useTheme";
import "./App.css";
import ScrollHandler from "./components/ScrollHandler";

function App() {
  const [page, setPage] = useState("home"); 
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Pass current page to Navbar */}
      <Navbar 
        setPage={setPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        currentPage={page}  
      />
      
      {/* Only show Hero background on home page */}
      {page === "home" && (
        <>
          {/* Fixed Hero as background for home page */}
          <div className="hero-background">
            <Hero />
          </div>
          
          {/* Scroll handler for color changes */}
          <ScrollHandler />
          
          {/* Scrollable content over Hero */}
          <div className="scrollable-content">
            <div className="content-spacer" />
            <Skills />
            <Home setPage={setPage} />
            <Footer />
          </div>
        </>
      )}

      {/* Projects page - no Hero background */}
      {page === "projects" && (
        <div className="regular-page">
          <Projects setPage={setPage} /> {/* Pass setPage */}
          <Footer />
        </div>
      )}

      {/* Contact page - no Hero background */}
      {page === "contact" && (
        <div className="regular-page">
          <Contact setPage={setPage} /> {/* Pass setPage */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;