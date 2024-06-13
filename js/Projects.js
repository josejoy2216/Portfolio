let proj1 = {
    title: "Library Management System",
    description: "This project is a simple yet powerful web application that helps manage a library's inventory. It is built using HTML, CSS, Bootstrap, and JavaScript, with a focus on DOM manipulation to create a dynamic and responsive user experience.", 
    image: "../img/projlibrary.jpg ",
    viewpage: "https://josejoy2216.github.io/library-management-system/",
    readview: "https://github.com/josejoy2216/library-management-system/blob/main/README.md",
    type:"website",
    availability: true 
};

let proj2 = {
    title: "Movie-Recommendation-System",
    description: "Content Based Recommender System recommends movies similar to the movie user likes and analyses the sentiments on the reviews given by the user for that movie.", 
    image: "../img/projmovie.jpg ",
    viewpage: "https://josejoy2216.github.io/Movie-Recommendation-System-with-Sentiment-Analysis/",
    readview: "https://github.com/josejoy2216/Movie-Recommendation-System-with-Sentiment-Analysis/blob/main/README.md",
    type:"website",
    availability: true 
};
let proj3 = {
    title: "Taskify",
    description: "Taskify is a simple and elegant ToDo List application built using HTML, CSS, and JavaScript. With Taskify, you can easily manage your tasks, mark them as done, edit them, and delete them as needed. It also provides a search functionality to quickly find specific tasks.", 
    image: "../img/projtodo.jpg ",
    viewpage: "https://josejoy2216.github.io/Taskify/",
    readview: "https://github.com/josejoy2216/Taskify/blob/main/README.md",
    type:"website",
    availability: true 
};

let portfolio = {
    projects: [proj1, proj2, proj3],
};

document.addEventListener('DOMContentLoaded', function() {

    let projectContainer = document.getElementById('projectContainer');
    let middleNavLinks = document.querySelectorAll('.centernav a');

    function createProjectCard(project) {
        // Create card div
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('project-card');
        cardDiv.style.backgroundColor = 'rgb(25, 25, 25)';
        cardDiv.style.margin = '20px'; // Adjust margin as needed
        cardDiv.style.padding = '15px';
        cardDiv.style.borderRadius = '20px';

        // Create table element
        let table = document.createElement('table');
        table.setAttribute('class', 'table2');
        table.setAttribute('align', 'center');

        // First row
        let row1 = document.createElement('tr');

        let titleCell = document.createElement('td');
        titleCell.setAttribute('colspan', '2');

        let titleParagraph = document.createElement('p');
        titleParagraph.setAttribute('style', 'font-size: larger; font-weight: bold; margin-left: 10px;');
        titleParagraph.textContent = project.title;

        titleCell.appendChild(titleParagraph);
        row1.appendChild(titleCell);

        // Second row
        let row2 = document.createElement('tr');

        let descriptionCell = document.createElement('td');
        descriptionCell.setAttribute('colspan', '2');
        descriptionCell.setAttribute('style', 'margin-left: 20px;');

        let descriptionDiv = document.createElement('div');
        descriptionDiv.setAttribute('class', 'para');
        descriptionDiv.textContent = project.description;

        descriptionCell.appendChild(descriptionDiv);
        row2.appendChild(descriptionCell);

        // Third row
        let row3 = document.createElement('tr');

        let imageCell = document.createElement('td');
        imageCell.setAttribute('rowspan', '3');

        let image = document.createElement('img');
        image.setAttribute('src', project.image);
        image.setAttribute('alt', project.title);
        image.setAttribute('style', 'box-shadow: 20px red; padding-left: 20px; border-radius: 20px; height: 150px; width: 230px ');

        imageCell.appendChild(image);
        row1.appendChild(imageCell);

        let viewButtonCell = document.createElement('td');
        let viewButton = document.createElement('button');
        viewButton.setAttribute('class', 'btnn ');
        viewButton.textContent = 'View Project';
        viewButton.onclick = function() {
            window.location.href = project.viewpage; // Redirect to the specified link
        };
        viewButtonCell.appendChild(viewButton);

        let readButtonCell = document.createElement('td');
        let readButton = document.createElement('button');
        readButton.setAttribute('class', 'btnn ');
        readButton.textContent = 'Read More';
        readButton.onclick = function() {
            window.location.href = project.readview; // Redirect to the specified link
        };
        readButtonCell.appendChild(readButton);

        row3.appendChild(viewButtonCell);
        row3.appendChild(readButtonCell);

        // Append rows to table
        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);

        // Append table to card
        cardDiv.appendChild(table);

        return cardDiv;
    }

    function displayProjects(type) {
        projectContainer.innerHTML = '';

        // Filter projects based on type
        let filteredProjects = portfolio.projects.filter(project => project.type === type);

        // Display filtered projects
        filteredProjects.forEach(project => {
            let projectCard = createProjectCard(project);
            projectContainer.appendChild(projectCard);
        });
    }

    displayProjects('website'); // Display website projects by default

    // Add click event listeners to middle navigation links
    middleNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the type from the href attribute
            let type = link.getAttribute('href').substring(1);
            //console.log('Link clicked. Type:', type);
            // Display projects based on the selected type
            displayProjects(type);
        });
    });
});