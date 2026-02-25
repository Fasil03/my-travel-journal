import { useEffect } from "react";

function ScrollColorHandler() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const skills = document.querySelector(".skills");
    const home = document.querySelector(".home");
    
    const handleScroll = () => {
      if (!hero || !skills || !home) return;
      
      const skillsRect = skills.getBoundingClientRect();
      const homeRect = home.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Change Hero color when Skills or Home sections are over it
      if (skillsRect.top < viewportHeight || homeRect.top < viewportHeight) {
        hero.style.background = "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
      } else {
        hero.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return null; // This component doesn't render anything
}

export default ScrollColorHandler;