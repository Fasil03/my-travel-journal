import { useState } from "react";
import "./Projects.css";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

function Projects({ setPage }) { // Receive setPage as prop
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle navigation
  const handleNavigate = (pageName) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };

  return (
    <div className="projects-page">
      {/* Hero Header */}
      <div className="projects-hero">
        <div className="p-hero-content">
          <h1 className="p-hero-title">My Portfolio</h1>
          <p className="p-hero-subtitle">
            A collection of my work across Web Development, Graphic Design & Networking
          </p>
          <div className="project-stats">
            <div className="stat">
              <span className="stat-number">{projects.web.length + projects.graphic.length + projects.networking.length}</span>
              <span className="stat-label">Total Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="category-navigation">
        <div className="nav-container">
          <button 
            className={`nav-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            <span className="nav-icon">📂</span>
            <span className="nav-text">All Projects</span>
          </button>
          
          <button 
            className={`nav-btn ${activeCategory === "web" ? "active" : ""}`}
            onClick={() => setActiveCategory("web")}
          >
            <span className="nav-icon">💻</span>
            <span className="nav-text">Web Development</span>
            <span className="nav-count">{projects.web.length}</span>
          </button>
          
          <button 
            className={`nav-btn ${activeCategory === "graphic" ? "active" : ""}`}
            onClick={() => setActiveCategory("graphic")}
          >
            <span className="nav-icon">🎨</span>
            <span className="nav-text">Graphic Design</span>
            <span className="nav-count">{projects.graphic.length}</span>
          </button>
          
          <button 
            className={`nav-btn ${activeCategory === "networking" ? "active" : ""}`}
            onClick={() => setActiveCategory("networking")}
          >
            <span className="nav-icon">🔗</span>
            <span className="nav-text">Networking</span>
            <span className="nav-count">{projects.networking.length}</span>
          </button>
        </div>
      </div>

      {/* Active Category Header */}
      <div className="category-header">
        <h2 className="category-title">
          {activeCategory === "all" ? "All Projects" : 
           activeCategory === "web" ? "Web Development Projects" :
           activeCategory === "graphic" ? "Graphic Design Projects" : "Networking Projects"}
        </h2>
        <div className="category-indicator">
          <div className="indicator-dot"></div>
          <span>Active Category</span>
        </div>
      </div>

      {/* Projects Display */}
      <div className="projects-container">
        {activeCategory === "all" ? (
          <div className="all-categories">
            {/* Web Development Section */}
            <div className="category-section">
              <div className="section-header">
                <div className="section-title">
                  <span className="section-icon">💻</span>
                  <h3>Web Development</h3>
                </div>
                <div className="section-badge">{projects.web.length} projects</div>
              </div>
              <div className="projects-grid">
                {projects.web.map((project, index) => (
                  <ProjectCard 
                    key={index}
                    category="Web Development"
                    items={[project]}
                    showViewMore={false}
                  />
                ))}
              </div>
            </div>

            {/* Graphic Design Section */}
            <div className="category-section">
              <div className="section-header">
                <div className="section-title">
                  <span className="section-icon">🎨</span>
                  <h3>Graphic Design</h3>
                </div>
                <div className="section-badge">{projects.graphic.length} projects</div>
              </div>
              <div className="projects-grid">
                {projects.graphic.map((project, index) => (
                  <ProjectCard 
                    key={index}
                    category="Graphic Design"
                    items={[project]}
                    showViewMore={false}
                  />
                ))}
              </div>
            </div>

            {/* Networking Section */}
            <div className="category-section">
              <div className="section-header">
                <div className="section-title">
                  <span className="section-icon">🔗</span>
                  <h3>Networking</h3>
                </div>
                <div className="section-badge">{projects.networking.length} projects</div>
              </div>
              <div className="projects-grid">
                {projects.networking.map((project, index) => (
                  <ProjectCard 
                    key={index}
                    category="Networking"
                    items={[project]}
                    showViewMore={false}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="single-category">
            <div className="projects-grid expanded">
              {activeCategory === "web" && projects.web.map((project, index) => (
                <ProjectCard 
                  key={index}
                  category="Web Development"
                  items={projects.web}
                />
              ))}
              {activeCategory === "graphic" && projects.graphic.map((project, index) => (
                <ProjectCard 
                  key={index}
                  category="Graphic Design"
                  items={projects.graphic}
                />
              ))}
              {activeCategory === "networking" && projects.networking.map((project, index) => (
                <ProjectCard 
                  key={index}
                  category="Networking"
                  items={projects.networking}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stats-grid">
          <div className="stat-card web-stat">
            <div className="stat-icon">💻</div>
            <div className="stat-content">
              <div className="stat-value">{projects.web.length}</div>
              <div className="stat-label">Web Projects</div>
            </div>
          </div>
          
          <div className="stat-card design-stat">
            <div className="stat-icon">🎨</div>
            <div className="stat-content">
              <div className="stat-value">{projects.graphic.length}</div>
              <div className="stat-label">Design Projects</div>
            </div>
          </div>
          
          <div className="stat-card network-stat">
            <div className="stat-icon">🔗</div>
            <div className="stat-content">
              <div className="stat-value">{projects.networking.length}</div>
              <div className="stat-label">Network Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - FIXED: Use handleNavigate */}
      <div className="portfolio-cta">
        <div className="cta-content">
          <h3>Interested in Working Together?</h3>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <button 
            className="cta-button"
            onClick={() => handleNavigate("contact")} // Navigate to Contact page
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;