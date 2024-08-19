import React from "react";
import "./assets/css/profile.css";
import { FaGithub, FaLinkedin, FaInstagram, FaHackerrank } from "react-icons/fa";


const Profile = () => {
  return (
    <div id="profile" className="profile-section">
      {/* Left side with text and social links */}
      <div className="profile-left">
        <h1 className="profile-intro">Hello,</h1>
        <h2 className="profile-name">
          This is <span className="highlight-name">Jose Chacko</span>, I'm a
        </h2>
        <h2 className="profile-title">
          Professional <span className="highlight-title">Software Developer.</span>
        </h2>

        {/* Social media icons */}
        <div className="social-links">
          <a href="https://github.com/josejoy2216" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/josejoychacko/" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.hackerrank.com/profile/josejoy567" className="social-icon">
            <FaHackerrank />
          </a>

        </div>

        {/* Buttons */}
        <div className="profile-buttons">
          <button className="contact-button"  onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}
          >Contact Me
          </button>
          <button className="resume-button" onClick={() => window.open('https://drive.google.com/file/d/1Kt3kwFj4HuaXFaLaU-bCYh7YL5bOP-A8/view?usp=sharing', '_blank')}
          >Get Resume
          </button>
        </div>
      </div>

      {/* Right side with code snippet */}
      <div className="code-container">
        <div className="code-window">
          <div className="code-header">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
            <hr className="bg-info" />
          </div>
          <pre className="code-content">
            <code>
              <span className="keyword">const</span> coder{" "}
              <span className="operator">=</span> {"{"}
              <br />
              &nbsp;&nbsp;<span className="property">name</span>:{" "}
              <span className="string">'Jose Chacko'</span>,
              <br />
              &nbsp;&nbsp;<span className="property">skills</span>:{" "}
              <span className="bracket">[</span>
              <span className="string">'React'</span>,{" "}
              <span className="string">'Express'</span>,{" "}
              <span className="string">'Node'</span>,{" "}
              <span className="string">'Java'</span>,{" "}
              <span className="string">'JavaScript'</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'MySql'</span>,{" "}
              <span className="string">'MongoDB'</span>,{" "}
              <span className="string">'Github'</span>{" "}
              <span className="string">'Firebase'</span>
              <span className="bracket">]</span>,
              <br />
              &nbsp;&nbsp;<span className="property">hardWorker</span>:{" "}
              <span className="boolean">true</span>,
              <br />
              &nbsp;&nbsp;<span className="property">quickLearner</span>:{" "}
              <span className="boolean">true</span>,
              <br />
              &nbsp;&nbsp;<span className="property">problemSolver</span>:{" "}
              <span className="boolean">true</span>,
              <br />
              &nbsp;&nbsp;<span className="property">hireable</span>:{" "}
              <span className="function">function</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span>{" "}
              (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="keyword">this</span>.
              <span className="property">hardWorker</span> {"&&"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="keyword">this</span>.
              <span className="property">problemSolver</span> {"&&"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="keyword">this</span>.
              <span className="property">quickLearner</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;{"}"},
              <br />
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Profile;
