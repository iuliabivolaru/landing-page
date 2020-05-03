/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getAllSections() {
    return document.querySelectorAll('section');
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNav() {
    const sections = getAllSections();
    const ul = document.querySelector('#navbar__list');
    sections.forEach((section) => {
        const li = document.createElement('li');
        li.textContent = section.getAttribute('data-nav');
        ul.appendChild(li);
    });
    ul.classList.toggle('menu__link');
}

createNav();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


