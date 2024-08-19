import React from 'react';
import './assets/css/about.css';
import profilePhoto from './assets/img/pphoto.png';

const About = () => {
    return (
        <section id="aboutme" className="about-section">
            <div className="about-content">
                <div className="skill-divider-wrapper">
                  <div className="skill-divider"></div>
                </div>
                
                <div className="about-image">
                    <img src={profilePhoto} alt="Profile" className="profilePhoto img-fluid rounded shadow" />
                </div>
                <div className="about-text">
                    <h2 className="contenthdsm">About Me</h2>
                    <p className="contentsm">
                        My name is Jose Chacko. I am a professional and enthusiastic programmer in my daily life.
                        I am a quick learner with a self-learning attitude.
                        I love to learn and explore new technologies and am passionate about problem-solving.
                        I love almost all the stacks of web application development and love to make the web more open to the world.
                        My core skill is based on JavaScript and I love to do most of the things using JavaScript.
                        I am available for any kind of job opportunity that suits my skills and interests.
                    </p>
                    {/* <div className="d-grid gap-2 d-md-block">
                        <button id="Hireme" className="btn btn-success btn-lg m-2">Hire Me</button>
                        <button id="Resume" className="btn btn-primary btn-lg m-2">Resume</button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
