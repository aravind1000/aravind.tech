const skillsData = [
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "Firebase",
        "icon": "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Netlify",
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
    {
        "name": "jQuery",
        "icon": "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
    },
    {
        "name": "Git",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
        "name": "Docker",
        "icon": "https://img.icons8.com/color/48/000000/docker.png"
    },
    {
        "name": "Kubernetes",
        "icon": "https://img.icons8.com/color/48/000000/kubernetes.png"
    },
    {
        "name": "AWS",
        "icon": "https://img.icons8.com/color/48/000000/amazon-web-services.png"
    }
];

function renderSkills() {
    const skillsContainer = document.getElementById('skillsContainer');

    skillsData.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('col-sm-3');
        skillElement.innerHTML = `
            <div class="card text-center">
                <img src="${skill.icon}" class="card-img-top" alt="${skill.name}">
                <div class="card-body">
                    <p class="card-text">${skill.name}</p>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

renderSkills();
