'use strict';

// The Mouse following Blob Code
const mouseCircle = document.getElementById("mouse-circle");

document.onpointermove = event => {
    const { clientX, clientY } = event;
    mouseCircle.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
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

// Code for the navigation bar.

let prevActive = document.getElementById('home');
const fontsDisplay = document.getElementById('fonts-wrapper');
const homeRight = document.getElementById('home-page-right');
const projectRight = document.getElementById('project-page-right');
const aboutRight = document.getElementById('about-page-right');
const contactRight = document.getElementById('contact-page-right');

function navButton(id) {
    if (document.getElementById(id).classList.contains('active')) {
        return false;
    }
    hideElement(homeRight);
    hideElement(projectRight);
    hideElement(aboutRight);
    hideElement(contactRight);
    fontsDisplay.style.opacity = 0;
    switch (id) {
        case 'home':
            showElement(homeRight);
            fontsDisplay.style.opacity = 1;
            break;
        case 'projects':
            showElement(projectRight);
            break;
        case 'about':
            showElement(aboutRight);
            break;
        case 'contact':
            showElement(contactRight);
        default:
            break;
    }
    removeClass(prevActive, 'active');
    prevActive = document.getElementById(id);
    addClass(prevActive, 'active');
    return false;
}

// Helper function to hide an element
function hideElement(element) {
    element.style.opacity = 0;
    element.style.visibility = 'hidden';
}

// Helper function to show an element
function showElement(element) {
    element.style.opacity = 1;
    element.style.visibility = 'visible';
}


// Code for the theme of the webpage.
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