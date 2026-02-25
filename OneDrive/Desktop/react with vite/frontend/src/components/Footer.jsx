import "./Footer.css";
import { contact } from "../data";

function Footer() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    try {
      // Simple direct approach - no target blank
      const link = document.createElement('a');
      link.href = `mailto:${contact.email}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      navigator.clipboard.writeText(contact.email).then(() => {
        alert(`📧 Email copied to clipboard!\n\n${contact.email}`);
      });
    }
  };

  return (
    <footer className="footer">
      <p> {new Date().getFullYear()} Fasil Alemye</p>

      <div className="footer-links">
        <a href={`mailto:${contact.email}`} onClick={handleEmailClick} className="clickable">Email</a>
        <a href={contact.github} target="_blank" className="clickable">GitHub</a>
        <a href={contact.linkedin} target="_blank" className="clickable">LinkedIn</a>
      </div>
    </footer>
  );
}
export default Footer;