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
var ul;
var sections;

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
    sections = getAllSections();
    ul = document.querySelector('#navbar__list');
    sections.forEach(section => {
        const li = document.createElement('li');
        li.innerHTML = `<a href='#${section.id}'>${section.getAttribute('data-nav')}</a>`;
        ul.appendChild(li);
    });
    ul.classList.toggle('menu__link');
}

createNav();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click
function smoothlyScrollToSectionOnClick() {
    ul.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        sections.forEach(section => {
            if(section.getAttribute('data-nav') == event.target.textContent) {
                section.scrollIntoView({behavior: "smooth"});
            }
        });
    });
}

smoothlyScrollToSectionOnClick();

function scrollToSection() {
    document.addEventListener('scroll', function handleScroll() {
        setSectionAsActive();   
    });
}
scrollToSection();

// Set sections as active
function setSectionAsActive() {
    sections.forEach(section => {
        const bounding = section.getBoundingClientRect();
        if (bounding.top <= 350 && bounding.bottom >= 300) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');   
        }
    });
}



