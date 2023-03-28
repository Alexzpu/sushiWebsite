/* ========================= MENU SHOW ========================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// menu show
// validare if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

// menu hidden
// validare if constant exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};

/* ========================= REMOVE MOBILE MENU ========================= */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu');
};
navLink.forEach(e => e.addEventListener('click', linkAction));

/* ========================= CHANGE BEACKGROUND HEADER ========================= */
const scrollHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater then 50VH, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

/* ========================= SOW SCROLL UP BUTTON ========================= */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when scroll up is higher than 350VH, add the show-scroll to scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');  
};

window.addEventListener('scroll', scrollUp);

/* ========================= SCROLL SECTION ACTIVE LINK ========================= */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        };
    });
};

window.addEventListener('scroll', scrollActive);

/* ========================= DARK LIGHT THEME ========================= */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// priviously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// validate if the user previosly choose a topic
if(selectedTheme) {
    // if the validation is fullfilled m ask what the issue was to know if activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    document.body.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
};

// activate / deactivate the theme manually with th button
themeButton.addEventListener('click', () => {
    // add or remove dark / icon theme 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* ========================= SCROLL REVEAL ANIMATION ========================= */
const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px',
    duration: 2500,
    delay: 200,
    //rest: true, // animations repeat
});

sr.reveal(`.home__img, .newsletter__container, .footer__logo, 
           .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})






