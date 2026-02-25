import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ setPage, theme, toggleTheme, currentPage }) { // Add currentPage prop
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Remove local activePage state and use the prop directly
  const activePage = currentPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePageClick = (page) => {
    setPage(page);
    setOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "projects", label: "Projects", icon: "💻" },
    { id: "contact", label: "Contact", icon: "📧" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo with animation */}
      <div className="nav-brand">
        <div className="nav-logo" onClick={() => handlePageClick("home")}>
          <span className="logo-first">Fasil</span>
          <span className="logo-last">Alemye</span>
          <div className="logo">
            <img src="/images/logo.png" alt="logo-image" />
          </div>
          <div className="logo-dot">
          </div>
        </div>
        <div className="nav-tagline">Portfolio</div>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-center">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li 
              key={item.id}
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => handlePageClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
              <div className="nav-indicator"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Theme toggle and hamburger */}
      <div className="nav-right">
        {/* Theme toggle with animation */}
        <button 
          className={`theme-toggle ${theme}`}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <div className="theme-toggle-inner">
            <div className="theme-icon sun">☀️</div>
            <div className="theme-icon moon">🌙</div>
            <div className="theme-toggle-slider"></div>
          </div>
        </button>

        {/* Mobile menu button */}
        <button 
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button 
            className="mobile-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li 
              key={item.id}
              className={`mobile-nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => handlePageClick(item.id)}
            >
              <span className="mobile-nav-icon">{item.icon}</span>
              <span className="mobile-nav-text">{item.label}</span>
              {activePage === item.id && <div className="mobile-nav-active"></div>}
            </li>
          ))}
        </ul>
        
        <div className="mobile-theme-section">
          <span>Theme:</span>
          <button 
            className="mobile-theme-btn"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </button>
        </div>
        
        <div className="mobile-footer">
          <div className="mobile-contact">
            <span>📧 fasilalemye@gmail.com</span>
            <span>🔗 Portfolio v1.0</span>
          </div>
        </div>
      </div>
      {open && (
        <div 
          className="mobile-menu-overlay active"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;