import React from 'react';
// Importing social media icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import './assets/css/footer.css';

const Footer = () => {
  const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b32e8fe7-712e-401a-820b-9b5b09b93e59");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <footer id='footer' className="footer">
      <div className="footer-left">
        <h3>Contact Us</h3>
        <form className="contact-form" onSubmit={onSubmit} >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
        <span>{result}</span>
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
  );
};

export default Footer;
