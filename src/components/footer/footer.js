import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaGlobe } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Desenvolvido por <strong>Hugo Bertoncelo</strong></p>
        <div className="social-icons">
          <a href="https://github.com/Hugobertoncelo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hugobertoncelo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/bertoncelo.hugo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://seuportfolio.com" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
            <FaGlobe />
          </a>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Hugo Bertoncelo. All rights reserved.</p>
    </footer>
  );
}
