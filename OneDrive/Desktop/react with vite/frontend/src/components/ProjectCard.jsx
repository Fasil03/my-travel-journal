import { useState } from "react";
import "./ProjectCard.css";
import ImageFallback from "./ImageFallback";

function ProjectCard({ category, items, showViewMore = true }) {
  const [showMore, setShowMore] = useState(false);

  // Show first project always, or all if showViewMore is false
  const visibleItems = !showViewMore ? items : (showMore ? items : items.slice(0, 1));

  const getCategoryColor = () => {
    switch(category) {
      case "Web Development":
      case "Web":
        return "#667eea";
      case "Graphic Design":
      case "Graphic":
        return "#f093fb";
      case "Networking":
        return "#4facfe";
      default:
        return "#667eea";
    }
  };

  const getCategoryIcon = () => {
    switch(category) {
      case "Web Development":
      case "Web":
        return "💻";
      case "Graphic Design":
      case "Graphic":
        return "🎨";
      case "Networking":
        return "🔗";
      default:
        return "📁";
    }
  };

  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="category-badge" style={{ backgroundColor: getCategoryColor() }}>
          <span className="category-icon">{getCategoryIcon()}</span>
          <span className="category-name">{category}</span>
        </div>
        {items.length > 1 && showViewMore && (
          <div className="project-count">{items.length} projects</div>
        )}
      </div>

      <div className="project-items">
        {visibleItems.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-image-container">
              {project.image ? (
                <ImageFallback src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  <span className="placeholder-icon">{getCategoryIcon()}</span>
                </div>
              )}
              <div className="image-overlay">
                <button className="view-project-btn">View Project</button>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {category === "Web Development" && (
                  <>
                    <span className="tag">React</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Vite</span>
                  </>
                )}
                {category === "Graphic Design" && (
                  <>
                    <span className="tag">Photoshop</span>
                    <span className="tag">Branding</span>
                    <span className="tag">Visual Design</span>
                  </>
                )}
                {category === "Networking" && (
                  <>
                    <span className="tag">Cisco</span>
                    <span className="tag">Routing</span>
                    <span className="tag">Security</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length > 1 && showViewMore && (
        <div className="project-card-footer">
          <button 
            className="toggle-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <>
                <span className="btn-icon">▲</span>
                Show Less
              </>
            ) : (
              <>
                <span className="btn-icon">▼</span>
                Show {items.length - 1} More
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;