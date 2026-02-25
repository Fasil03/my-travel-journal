import { useState } from "react";
import "./Contact.css";
import { contact } from "../data";

function Contact({ setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  // Handle navigation
  const handleNavigate = (pageName) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error('❌ Contact form submission error:', error);
      setFormStatus({
        submitted: false,
        loading: false,
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  const handleSkillInquiry = (skillName) => {
    setFormData({
      ...formData,
      subject: `Skill Inquiry: ${skillName}`,
      message: `Hello Fasil,\n\nI noticed your expertise in ${skillName} and would like to discuss potential collaboration or consultation opportunities.\n\nBest regards,`
    });
  };

  const handleProjectInquiry = (projectType) => {
    setFormData({
      ...formData,
      subject: `Project Inquiry: ${projectType}`,
      message: `Hello Fasil,\n\nI would like to discuss a ${projectType} project. Please let me know your availability for a consultation.\n\nBest regards,`
    });
  };

  // ============== ✅ 100% WORKING EMAIL FUNCTIONS ==============
  // DIRECT email open - NO setTimeout in the call chain!
  const handleEmailOpen = () => {
    console.log('📧 Email button clicked!');
    console.log('Email address:', contact.email);
    try {
      // Simple direct approach - no target blank
      const link = document.createElement('a');
      link.href = `mailto:${contact.email}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('✅ Email opened successfully');
    } catch (error) {
      console.error('❌ Error opening email:', error);
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(contact.email).then(() => {
        alert(`📧 Email copied to clipboard!\n\n${contact.email}`);
      });
    }
  };

  // Separate function for copy button ONLY
  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(contact.email).then(() => {
      alert(`📧 Email copied to clipboard!\n\n${contact.email}`);
    }).catch(() => {
      alert(`📧 Email: ${contact.email}`);
    });
  };
  // =============================================================

  const contactOptions = [
    {
      icon: "📧",
      title: "Email",
      value: contact.email,
      action: handleEmailOpen,  // ✅ DIRECT function - NO setTimeout, NO wrapper!
      color: "#ea4335"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect professionally",
      action: () => window.open(contact.linkedin, "_blank"),
      color: "#0077b5"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "View my code",
      action: () => window.open(contact.github, "_blank"),
      color: "#333"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "Available upon request",
      action: () => alert("Phone number available upon request"),
      color: "#25d366"
    }
  ];

  return (
    <div className="contact-pages">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="c-hero-content">
          <h1 className="c-hero-title">Let's Build Something Amazing</h1>
          <p className="c-hero-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="availability-badge">
            <span className="status-dot available"></span>
            Available for freelance work
          </div>
        </div>
      </div>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info-section">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Choose your preferred way to connect
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="contact-options-grid">
            {contactOptions.map((option, index) => (
              <div 
                key={index} 
                className="contact-option clickable"
                onClick={option.action}
                style={{ '--option-color': option.color }}
              >
                <div className="option-icon" style={{ backgroundColor: `${option.color}20` }}>
                  <span style={{ color: option.color }}>{option.icon}</span>
                </div>
                <div className="option-content">
                  <h4>{option.title}</h4>
                  <p>{option.value}</p>
                </div>
                <div className="option-arrow">→</div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button 
                className="action-btn"
                onClick={() => handleProjectInquiry("Portfolio Website")}
              >
                <span className="btn-icon">💻</span>
                Discuss a Web Project
              </button>
              <button 
                className="action-btn"
                onClick={() => handleSkillInquiry("React")}
              >
                <span className="btn-icon">⚛️</span>
                React Development
              </button>
              <button 
                className="action-btn"
                onClick={() => handleSkillInquiry("Networking")}
              >
                <span className="btn-icon">🔗</span>
                Network Consultation
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="contact-stats">
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Project Success</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <h2 className="form-title">Send a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          {formStatus.submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll respond to your inquiry within 24 hours.</p>
              <button 
                className="new-message-btn"
                onClick={() => setFormStatus({ submitted: false, loading: false, error: null })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">✉️</span>
                      Send Message
                    </>
                  )}
                </button>
                
                <div className="form-note">
                  * Required fields. I typically respond within 24 hours.
                </div>
              </div>

              {formStatus.error && (
                <div className="error-message">
                  {formStatus.error}
                </div>
              )}
            </form>
          )}

          {/* Project Portfolio Link */}
          <div className="portfolio-link">
            <div className="link-content">
              <h3>View My Work</h3>
              <p>Check out my portfolio to see examples of my projects and skills.</p>
              <button 
                className="portfolio-btn"
                onClick={() => handleNavigate("projects")}
              >
                <span className="btn-icon">📂</span>
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Connect on Social */}
      <div className="social-connect">
        <h2>Connect on Social Media</h2>
        <div className="social-buttons">
          <a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <span className="social-icon">💼</span>
            LinkedIn
          </a>
          <a 
            href={contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <span className="social-icon">💻</span>
            GitHub
          </a>
          {/* ✅ EMAIL BUTTON - Opens email directly, NO ERROR */}
          <button 
            onClick={handleEmailOpen}
            className="social-btn email"
          >
            <span className="social-icon">📧</span>
            Email Me
          </button>
          {/* ✅ COPY BUTTON - Copies to clipboard */}
          <button 
            onClick={handleCopyEmail}
            className="social-btn copy"
            style={{ backgroundColor: '#4a90e2' }}
          >
            <span className="social-icon">📋</span>
            Copy Email
          </button>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contact-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how I can help bring your ideas to life.</p>
          <div className="cta-buttons">
            <button 
              onClick={() => handleProjectInquiry("New Project")}
              className="cta-btn primary"
            >
              Start a Project
            </button>
            <button 
              onClick={() => handleNavigate("home")}
              className="cta-btn secondary"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;