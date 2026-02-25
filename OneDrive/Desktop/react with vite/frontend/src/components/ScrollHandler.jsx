// components/ScrollHandler.jsx
import { useEffect } from "react";

function ScrollHandler() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const skills = document.querySelector(".skills");
    const home = document.querySelector(".home");
    
    if (!hero || !skills || !home) return;
    
    const handleScroll = () => {
      const skillsRect = skills.getBoundingClientRect();
      const homeRect = home.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // When Skills section enters viewport
      if (skillsRect.top <= viewportHeight * 0.7) {
        hero.style.background = "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
      } 
      // When Home section enters viewport
      else if (homeRect.top <= viewportHeight * 0.7) {
        hero.style.background = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
      }
      // Back to original when at top
      else if (window.scrollY < 100) {
        hero.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      }
    };
    
    // Only add listener on home page
    if (window.location.pathname === "/" || window.location.hash === "#home") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  return null;
}

export default ScrollHandler;