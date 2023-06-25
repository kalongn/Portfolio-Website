const mouseCircle = document.getElementById("mouse-circle");
const mainFrame = document.getElementById("overflow-mousehidden-wrapper");
const padding = document.querySelector(".exterior-padding");
const paddingStyles = padding.currentStyle || window.getComputedStyle(padding);
let offSet = parseInt(paddingStyles.padding);

mainFrame.onpointermove = event => {
    const { clientX, clientY } = event;
    mouseCircle.animate({
        left: `${clientX - offSet}px`,
        top: `${clientY - offSet}px`
    }, { duration: 1500, fill: "forwards" });
}

/**
 * Add a class to an element.
 * @param {*} el 
 *      the html element selected.
 * @param {*} name 
 *      the name of the class to be added.
 */
function addClass(el, name) {
    el.classList.add(name);
}

/**
 * Toggle a class to an element.
 * @param {*} el 
 *      the html element selected.
 * @param {*} name 
 *      the name of the class to be toggled.
 */
function toggleClass(el, name) {
    el.classList.toggle(name);
}

/**
 * Remove a class from an element.
 * @param {*} el 
 *      the html element selected.
 * @param {*} name 
 *      the name of the class to be added.
 */
function removeClass(el, name) {
    el.classList.remove(name);
}

let prevActive = document.getElementById('home');
const fontsDisplay = document.getElementById('fonts-wrapper');
const homeRight = document.getElementById('home-page-right');
const projectRight = document.getElementById('project-page-right');
const aboutRight = document.getElementById('about-page-right');
function navButton(id) {
    if (document.getElementById(id).classList.contains('active')) {
        return false;
    }
    homeRight.style.opacity = 0;
    homeRight.style.visibility = "hidden";
    projectRight.style.opacity = 0;
    projectRight.style.visibility = "hidden";
    fontsDisplay.style.opacity = 0;
    aboutRight.style.opacity = 0;
    aboutRight.style.visibility = "hidden";
    switch (id) {
        case 'home':
            homeRight.style.opacity = 1;
            fontsDisplay.style.opacity = 1;
            homeRight.style.visibility = "visible";
            break;
        case 'projects':
            projectRight.style.opacity = 1;
            projectRight.style.visibility = "visible";
            break;
        case 'about':
            aboutRight.style.opacity = 1;
            aboutRight.style.visibility = "visible"
            break;
        default:
            break;
    }
    removeClass(prevActive, 'active');
    prevActive = document.getElementById(id);
    addClass(prevActive, 'active');
    return false;
}

const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');
const body = document.body;
function switchTheme(id) {
    if (document.getElementById(id).classList.contains('active')) {
        return false;
    }
    toggleClass(lightModeButton, 'active');
    toggleClass(darkModeButton, 'active');
    toggleClass(body, 'dark');
}