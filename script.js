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
const homeLeft = document.getElementById('home-page-right');
const projectLeft = document.getElementById('project-page-right');
function navButton(id) {
    if (document.getElementById(id).classList.contains('active')) {
        return false;
    }
    homeLeft.style.opacity = 0;
    homeLeft.style.visibility = "hidden";
    projectLeft.style.opacity = 0;
    projectLeft.style.visibility = "hidden";
    switch (id) {
        case 'home':
            homeLeft.style.opacity = 1;
            homeLeft.style.visibility = "visible";
            break;
        case 'projects':
            projectLeft.style.opacity = 1;
            projectLeft.style.visibility = "visible";
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