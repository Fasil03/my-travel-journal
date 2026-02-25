import "./CV_Model.css";

 function CV_Model({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>My CV</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* PDF Preview */}
        <iframe
          src="/cv/Fasil_CV.pdf"
          title="CV Preview"
          className="cv-preview"
        />

        <div className="modal-actions">
          <a
            href="/cv/Fasil_CV.pdf"
            download
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
export default CV_Model;
