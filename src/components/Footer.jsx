import React from 'react'
// Importing social media icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import './assets/css/footer.css';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-left">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="footer-right">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a href="https://your-facebook-url" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://your-twitter-url" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/josejoychacko/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://your-instagram-url" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/josejoy2216" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer