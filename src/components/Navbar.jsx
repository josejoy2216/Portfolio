import React from 'react';
import './assets/css/nav.css';
import logo from './assets/img/download.png'; // Adjust the path based on your project's structure

const Navbar = () => {
  return (
    <nav className="topnav navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#profile">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link" href="#aboutme">
              ABOUT
            </a>
            <a className="nav-link" href="#skills">
              SKILLS
            </a>
            <a className="nav-link" href="#projects">
              PROJECTS
            </a>
            {/* <a className="nav-link" href="#service">
              SERVICES
            </a>
            <a className="nav-link" href="#contact">
              BLOGS
            </a> */}
            <a className="nav-link" href="#footer">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
