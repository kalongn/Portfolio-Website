//WorkPage code.
let project1, project2, project3;
let projects;
let currentProjectIndex;

function updateProjectDisplay() {
    document.getElementById("projectName").innerHTML = projects[currentProjectIndex].Name;
    document.getElementById("projectDescription").innerHTML = projects[currentProjectIndex].Description;
    document.getElementById("projectImages").src = projects[currentProjectIndex].Image;
    document.getElementById("projectLinks").href = projects[currentProjectIndex].Link;
}

function startWorkWeb() {
    project1 = { Name: "Slidle", Image: "/img/Slidle.png", Description: "Slider Puzzle, participated in the Peanut Jam 2022 hosted by TechCodes, Won the Award of Most Friendly UI.", Link: "https://github.com/kalongn/PeanutJam2022"};
    project2 = { Name: "SBU Weather Bot", Image: "/img/SBU_Bot.png", Description: "A discord command control weather bot that report weather using weather.js, node.js and discord.js.", Link: "https://github.com/kalongn/SBU-Weather-BOT"};
    project3 = { Name: "Portfolio Website", Image: "/img/KLS_2023.png", Description: "A Website where I showcase my journey along the way as a prospect software engineer.", Link: "https://github.com/kalongn/Portfolio-Website"};
    projects = new Array(project1, project2, project3);
    currentProjectIndex = 0;
    updateProjectDisplay();
}

function leftArrow() {
    document.getElementById("indicator" + currentProjectIndex).classList.remove("active");
    currentProjectIndex - 1 == -1 ? currentProjectIndex = 2 : currentProjectIndex--;
    updateProjectDisplay();
    document.getElementById("indicator" + currentProjectIndex).classList.add("active");
}

function rightArrow() {
    document.getElementById("indicator" + currentProjectIndex).classList.remove("active");
    currentProjectIndex + 1 == 3 ? currentProjectIndex = 0 : currentProjectIndex++;
    updateProjectDisplay();
    document.getElementById("indicator" + currentProjectIndex).classList.add("active");
}