import { useState, useEffect } from "react";
import "./Skills.css";
import { skills } from "../data";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming");
  const [animateBars, setAnimateBars] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setAnimateBars(false);
    // Trigger animation after state update with a small delay
    setTimeout(() => {
      setAnimateBars(true);
    }, 50);
  };

  // Get active skills based on selected category
  const activeSkills = skills[activeCategory] || [];

  // Function to get skill level text
  const getSkillLevel = (proficiency) => {
    if (proficiency >= 70) return "Expert";
    if (proficiency >= 60) return "Advanced";
    if (proficiency >= 40) return "Intermediate";
    return "Beginner";
  };

  // Initialize animation on component mount with timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBars(true);
    }, 100);
    
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <section className="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">Click on a category to view detailed proficiency levels</p>

      <div className="skills-categories">
        <button
          className={`category-btn ${activeCategory === "programming" ? "active" : ""}`}
          onClick={() => handleCategoryClick("programming")}
        >
          <span className="category-icon">💻</span>
          Programming
        </button>
        
        <button
          className={`category-btn ${activeCategory === "networking" ? "active" : ""}`}
          onClick={() => handleCategoryClick("networking")}
        >
          <span className="category-icon">🔗</span>
          Networking
        </button>
        
        <button
          className={`category-btn ${activeCategory === "design" ? "active" : ""}`}
          onClick={() => handleCategoryClick("design")}
        >
          <span className="category-icon">🎨</span>
          Graphic Design
        </button>
      </div>

      {/* Skills Graph Display */}
      <div className="skills-graph">
        <div className="graph-header">
          <h3 className="graph-title">
            {activeCategory === "programming" && "💻 Programming Skills"}
            {activeCategory === "networking" && "🔗 Networking Skills"}
            {activeCategory === "design" && "🎨 Graphic Design Skills"}
          </h3>
          <div className="skills-count">
            {activeSkills.length} {activeSkills.length === 1 ? 'skill' : 'skills'}
          </div>
        </div>
        
        <div className="graph-container">
          {activeSkills.map((skill, index) => {
            const skillLevel = getSkillLevel(skill.proficiency);
            
            return (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                </div>
                
                <div className="skill-bar-container">
                  <div 
                    className={`skill-bar ${animateBars ? 'animate' : ''}`}
                    style={{ 
                      width: `${skill.proficiency}%`,
                      '--delay': `${index * 0.1}s`
                    }}
                  >
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                </div>
                
                <div className="skill-level-row">
                  <div className={`skill-level-badge ${skillLevel.toLowerCase()}`}>
                    {skillLevel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Legend */}
      <div className="skills-legend">
        <h4 className="legend-title">Proficiency Levels</h4>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color beginner"></div>
            <div className="legend-text">
              <span className="legend-name">Beginner</span>
              <span className="legend-range">0-30%</span>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color intermediate"></div>
            <div className="legend-text">
              <span className="legend-name">Intermediate</span>
              <span className="legend-range">31-60%</span>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color advanced"></div>
            <div className="legend-text">
              <span className="legend-name">Advanced</span>
              <span className="legend-range">61-70%</span>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color expert"></div>
            <div className="legend-text">
              <span className="legend-name">Expert</span>
              <span className="legend-range">71-100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;