import "./contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const email = "leonomelfanny@gmail.com"; 

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-container">
        <p className="contact-text">
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!
        </p>

        <div className="contact-buttons">
          {/* Tombol Email */}
          <button className="contact-btn email-btn" onClick={handleEmailClick}>
            <FaEnvelope className="btn-icon" />
            <span>Kirim Email</span>
          </button>

          {/* Link LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/melfanny-leono/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn linkedin-btn"
          >
            <FaLinkedin className="btn-icon" />
            <span>LinkedIn</span>
          </a>

          {/* Link GitHub */}
          <a 
            href="https://github.com/melfanny" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn github-btn"
          >
            <FaGithub className="btn-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

