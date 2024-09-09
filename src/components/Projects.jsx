import React from 'react';
import './assets/css/project.css';
import lms from './assets/img/projects/projlibrary.jpg';
import pm from './assets/img/projects/projmovie.jpg';
import ptodo from './assets/img/projects/projtodo.jpg';
import booknook from './assets/img/projects/booknook.png';
import uno from './assets/img/projects/uno1.png';
import mafia from './assets/img/projects/mafia.jpg';
import pcard from './assets/img/projects/vCardmobile.png';



const projectsData = [
    {
        name: "Library Management System",
        img: lms,
        desc: "This project is a simple yet powerful web application that helps manage a library's inventory...",
        knowMore: "https://github.com/josejoy2216/library-management-system/blob/main/README.md",
        viewLive: "https://josejoy2216.github.io/library-management-system/"
    },
    {
        name: "Movie Recommendation System",
        img: pm,
        desc: "Content Based Recommender System recommends movies similar to the movie user likes and analyses the sentiments on the reviews given by the user for that movie.",
        knowMore: "https://josejoy2216.github.io/Movie-Recommendation-System-with-Sentiment-Analysis/",
        viewLive: "https://github.com/josejoy2216/Movie-Recommendation-System-with-Sentiment-Analysis"
    },
    {
        name: "UNO - Game",
        img: uno,
        desc: "This repository contains the backend server for a multiplayer Uno card game built using Node.js, Express, and MongoDB.",
        knowMore: "https://github.com/josejoy2216/UNO-GAME/blob/main/README.md",
        viewLive: "https://github.com/josejoy2216/UNO-GAME"
    },
    {
        name: "BookNook",
        img: booknook,
        desc: "BookNook is an e-commerce application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to browse, view details, and purchase books. Additionally, it includes an admin panel where administrators can manage the collection of books, including adding, updating, and deleting book entries. Firebase is used for authentication to secure both user and admin access.",
        knowMore: "https://github.com/josejoy2216/Ecommerce/blob/main/README.md",
        viewLive: "https://github.com/josejoy2216/Ecommerce"
    },
    {
        name: "Mafia - Game",
        img: mafia,
        desc: "This project is a multiplayer Mafia game where players can join from different devices using a unique game code. The game is designed to be played in real-time, with roles like Mafia, Police, and Civilians assigned to players. The game progresses through night and day phases, with players voting to identify the Mafia, and the game ends when a win condition is met.",
        knowMore: "https://github.com/josejoy2216/mafia/blob/main/README.md",
        viewLive: "https://github.com/josejoy2216/mafia/"
    },
    {
        name: "Taskify",
        img: ptodo,
        desc: "Taskify is a simple and elegant ToDo List application built using HTML, CSS, and JavaScript. With Taskify, you can easily manage your tasks, mark them as done, edit them, and delete them as needed. It also provides a search functionality to quickly find specific tasks.",
        knowMore: "https://github.com/josejoy2216/Taskify/blob/main/README.md",
        viewLive: "https://josejoy2216.github.io/Taskify/"
    },
    {
        name: "Porfolio - vCard",
        img: pcard,
        desc: "vCard is a fully responsive personal portfolio website, responsive for all devices, built using HTML, CSS, and JavaScript.",
        knowMore: "https://github.com/josejoy2216/vCard-Personal-Portfolio/blob/main/README.md",
        viewLive: "https://josejoy2216.github.io/vCard-Personal-Portfolio/"
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <div className="projects-header-wrapper">
                <div className="skills-header">
                    <span className="projects-line"></span>
                    <span className="projects-title">Projects</span>
                    <span className="projects-line"></span>
                </div>
            </div>

            <div className="cards-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="card">
                        <img src={project.img} className="card-img-top" alt={`Project ${index + 1}`} />
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text description">{project.desc}</p>
                            <div className="button-container">
                                <a href={project.knowMore} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Know More</a>
                                <a href={project.viewLive} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Live</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
