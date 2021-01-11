document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

window.sr = ScrollReveal();

sr.reveal('.nav-main', { 
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.showcase', { 
    duration: 2000,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.news-cars', { 
    duration: 2000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.cars-banner-one', { 
    duration: 2000,
    origin: 'top',
    distance: '-100px'
});