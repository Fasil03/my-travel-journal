import "./Home.css";
import { profile } from "../data";
import { useState } from "react";
import CV_Model from "../components/CV_Model";

function Home({ setPage }) { // Receive setPage as prop
  const [openCV, setOpenCV] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handle card hover
  const handleCardHover = (cardName) => {
    setHoveredCard(cardName);
  };

  // Handle card leave
  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  // Handle navigation to other pages
  const handleNavigate = (pageName) => {
    setPage(pageName);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <section className="home">
      <div className="home-container">
        {/* Animated welcome text */}
        <div className="welcome-section">
          <div className="welcome-text">
            <h1 className="main-title">
              Welcome, I'm <span className="highlight-name">{profile.name}</span>
            </h1>
            
            <div className="title-decoration">
              <div className="decor-line"></div>
              <div className="decor-dot"></div>
              <div className="decor-line"></div>
            </div>
            
            <div className="role-badges">
              <span className="badge software-dev">Software Developer</span>
              <span className="badge networking">Networking Specialist</span>
              <span className="badge graphic-design">Graphic Designer</span>
            </div>
          </div>
        </div>

        {/* Profile description with interactive elements */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-header">
              <h2 className="profile-title">About My Expertise</h2>
              <div className="expertise-icon">💼</div>
            </div>
            
            <p className="profile-description">
              {profile.description}
            </p>
            
            {/* Interactive skill highlights */}
            <div className="skill-highlights">
              <div 
                className={`skill-item ${hoveredCard === 'cv' ? 'pulse' : ''}`}
                onMouseEnter={() => handleCardHover('cv')}
                onMouseLeave={handleCardLeave}
              >
                <div className="skill-icon">⚛️</div>
                <span className="skill-text">React & JavaScript</span>
              </div>
              <div 
                className={`skill-item ${hoveredCard === 'contact' ? 'pulse' : ''}`}
                onMouseEnter={() => handleCardHover('contact')}
                onMouseLeave={handleCardLeave}
              >
                <div className="skill-icon">☕</div>
                <span className="skill-text">Java & Spring Boot</span>
              </div>
              <div 
                className={`skill-item ${hoveredCard === 'projects' ? 'pulse' : ''}`}
                onMouseEnter={() => handleCardHover('projects')}
                onMouseLeave={handleCardLeave}
              >
                <div className="skill-icon">🔗</div>
                <span className="skill-text">Cisco Networking</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎨</div>
                <span className="skill-text">Adobe Photoshop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive CTAs */}
        <div className="action-section">
          <div className="action-cards">
            <button 
              className={`action-card cv-card ${hoveredCard === 'cv' ? 'active' : ''}`}
              onClick={() => setOpenCV(true)}
              onMouseEnter={() => handleCardHover('cv')}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-icon">📄</div>
              <h3 className="card-title">View My CV</h3>
              <p className="card-description">Check my professional experience and qualifications</p>
              <div className="card-action">
                <span className="action-text">Open CV</span>
                <span className={`action-arrow ${hoveredCard === 'cv' ? 'animate' : ''}`}>→</span>
              </div>
            </button>
            
            <button 
              className={`action-card contact-card ${hoveredCard === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavigate('contact')} // Fixed: Use handleNavigate
              onMouseEnter={() => handleCardHover('contact')}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-icon">📧</div>
              <h3 className="card-title">Get In Touch</h3>
              <p className="card-description">Ready to discuss your project or collaboration</p>
              <div className="card-action">
                <span className="action-text">Contact Me</span>
                <span className={`action-arrow ${hoveredCard === 'contact' ? 'animate' : ''}`}>→</span>
              </div>
            </button>
            
            <button 
              className={`action-card projects-card ${hoveredCard === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavigate('projects')} // Fixed: Use handleNavigate
              onMouseEnter={() => handleCardHover('projects')}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-icon">💻</div>
              <h3 className="card-title">View Projects</h3>
              <p className="card-description">Explore my portfolio of work across domains</p>
              <div className="card-action">
                <span className="action-text">See Work</span>
                <span className={`action-arrow ${hoveredCard === 'projects' ? 'animate' : ''}`}>→</span>
              </div>
            </button>
          </div>
        </div>
        {/* CV Modal */}
        {openCV && <CV_Model onClose={() => setOpenCV(false)} />}
      </div>
    </section>
  );
}

export default Home;