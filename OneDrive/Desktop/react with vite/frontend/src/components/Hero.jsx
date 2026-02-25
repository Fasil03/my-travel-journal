import { useEffect, useState } from "react";
import "./Hero.css";
import { profile } from "../data";

function Hero() {
  const [typedName, setTypedName] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Typewriter for name
  useEffect(() => {
    const fullName = `Hello, I am ${profile.name}`;
    let index = 0;

    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Typewriter for title (starts after name finishes)
  useEffect(() => {
    if (typedName !== `Hello, I am ${profile.name}`) return;

    const fullTitle = profile.title;
    let index = 0;

    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, index + 1));
      index++;
      if (index === fullTitle.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [typedName]);

  return (
    <section className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <div 
          className={`background-image ${imageLoaded ? 'loaded' : ''}`}
          style={{ 
            backgroundImage: `url(${profile.image})`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="background-overlay"></div>
          
          {/* Gradient overlay for visual effect */}
          <div className="background-gradient"></div>
        </div>
      </div>
      
      {/* Preload image for smooth loading */}
      <img 
        src={profile.image} 
        alt="" 
        style={{ display: 'none' }}
        onLoad={() => setImageLoaded(true)}
      />

      {/* Content overlay on image */}
      <div className="hero-content">
        <div className="hero-text-container">
          {/* Animated welcome text */}
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="typewriter-line">
                <span className="accent">{typedName}</span>
              </span>
            </h1>
            
            <h2 className="hero-title">
              <span className="typewriter-line">
                <span className="accent">{typedTitle}</span>
              </span>
            </h2>
            
            <div className="hero-description">
              <p>{profile.description}</p>
            </div>
            
            {/* Decorative elements */}
            <div className="hero-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
            
            {/* Quick info badges */}
            <div className="hero-badges">
              <span className="badge">Software Developer</span>
              <span className="badge">Network Engineer</span>
              <span className="badge">Graphic Designer</span>
            </div>
          </div>
        </div>
        
        {/* Optional: Profile image as small circle (if you still want to show it) */}
        <div className="hero-profile-image">
          <div className="profile-image-frame">
            <img 
              src={profile.image} 
              alt={profile.name}
              className={`profile-img ${imageLoaded ? 'loaded' : ''}`}
            />
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;