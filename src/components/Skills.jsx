import React from 'react';
import Marquee from 'react-fast-marquee';

// Import skill images directly
import adobeXd from './assets/skills/adobe-xd.svg';
import afterEffects from './assets/skills/after-effects.svg';
// import angular from './assets/skills/angular.svg';
// import aws from './assets/skills/aws.svg';
// import azure from './assets/skills/azure.svg';
// import blender from './assets/skills/blender.svg';
import bootstrap from './assets/skills/bootstrap.svg';
// import bulma from './assets/skills/bulma.svg';
import c from './assets/skills/c.svg';
import canva from './assets/skills/canva.svg';
// import capacitorjs from './assets/skills/capacitorjs.svg';
// import coffeescript from './assets/skills/coffeescript.svg';
import cplusplus from './assets/skills/cplusplus.svg';
import csharp from './assets/skills/csharp.svg';
import css from './assets/skills/css.svg';
// import dart from './assets/skills/dart.svg';
// import deno from './assets/skills/deno.svg';
// import django from './assets/skills/django.svg';
// import docker from './assets/skills/docker.svg';
// import fastify from './assets/skills/fastify.svg';
import figma from './assets/skills/figma.svg';
import firebase from './assets/skills/firebase.svg';
//import flutter from './assets/skills/flutter.svg';
import git from './assets/skills/git.svg';
//import go from './assets/skills/go.svg';
import html from './assets/skills/html.svg';
//import illustrator from './assets/skills/illustrator.svg';
import ionic from './assets/skills/ionic.svg';
import java from './assets/skills/java.svg';
import javascript from './assets/skills/javascript.svg';
import lightroom from './assets/skills/lightroom.svg';
import materialui from './assets/skills/materialui.svg';
//import matlab from './assets/skills/matlab.svg';
import microsoftoffice from './assets/skills/microsoftoffice.svg';
import mongoDB from './assets/skills/mongoDB.svg';
import mysql from './assets/skills/mysql.svg';
import nextJS from './assets/skills/nextJS.svg';
import numpy from './assets/skills/numpy.svg';
import photoshop from './assets/skills/photoshop.svg';
import php from './assets/skills/php.svg';
import picsart from './assets/skills/picsart.svg';
//import postgresql from './assets/skills/postgresql.svg';
import premierepro from './assets/skills/premierepro.svg';
import python from './assets/skills/python.svg';
import react from './assets/skills/react.svg';
//import ruby from './assets/skills/ruby.svg';
import selenium from './assets/skills/selenium.svg';
//import typescript from './assets/skills/typescript.svg';
import wordpress from './assets/skills/wordpress.svg';


// Ensure the CSS file path is correct
import './assets/css/skills.css';

// Skill data with images
const skillsData = [
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'JavaScript', image: javascript },
  { name: 'Bootstrap', image: bootstrap },
  { name: 'React', image: react },
  { name: 'Next.js', image: nextJS },
  { name: 'Material UI', image: materialui },
  { name: 'WordPress', image: wordpress },
  { name: 'Firebase', image: firebase },
  { name: 'Canva', image: canva },
  //{ name: 'Node.js', image: node },
  //{ name: 'Express', image: express },
  { name: 'MongoDB', image: mongoDB },
  { name: 'PHP', image: php },
  { name: 'MySQL', image: mysql },
  { name: 'Java', image: java },
  { name: 'Python', image: python },
  { name: 'C#', image: csharp },
  { name: 'C', image: c },
  { name: 'C++', image: cplusplus },
  { name: 'Ionic', image: ionic },
  { name: 'Photoshop', image: photoshop },
  { name: 'Lightroom', image: lightroom },
  { name: 'Picsart', image: picsart },
  { name: 'Premierepro', image: premierepro },
  { name: 'AdobeXd', image: adobeXd },
  { name: 'AfterEffects', image: afterEffects },
  { name: 'Git', image: git },
  { name: 'Microsoftoffice', image: microsoftoffice },
  { name: 'Figma', image: figma },
  { name: 'Numpy', image: numpy },
  { name: 'Selenium', image: selenium },
];

function Skills() {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-divider-wrapper">
        <div className="skills-divider"></div>
      </div>
      <div className="skills-header-wrapper">
        <div className="skills-header">
          <span className="skills-line"></span>
          <span className="skills-title">Skills</span>
          <span className="skills-line"></span>
        </div>
      </div>
      <div className="skills-marquee">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="skill-card" key={id}>
              <div className="skill-card-content">
                <div className="skill-divider-wrapper">
                  <div className="skill-divider"></div>
                </div>
                <div className="skill-info">
                  <div className="skill-image">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="skill-img"
                    />
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
