document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});



ScrollReveal().reveal('.nav-main', {
    delay: '500',
    distance: '200%',
    reset: true,
    origin:'top',
    duration: '1000'
    
});

ScrollReveal().reveal('.menu-btn', {
    delay: 500,
    distance:'100px',
    origin:'top',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.showcase', {
    delay: 500,
    // distance:'100px',
    origin:'top',
    duration: 2000,
    reset: true
});


ScrollReveal().reveal('.news-cars', { 
    delay: '600',
    duration: '2000',
    reset: true,
    // distance:'-100%',
    origin: 'left'
});
ScrollReveal().reveal('.cars-banner-one', { 
    delay:'700',
    duration: '2000',
    origin: 'top',
    distance: '-100px',
    reset: true
});

ScrollReveal().reveal('.face', { 
    duration: 2000,
    origin: 'left',
    distance: '100px',
    reset: true
});

ScrollReveal().reveal('.twitter', { 
    duration: 2000,
    origin: 'top',
    distance: '-100px',
    reset: true
});

ScrollReveal().reveal('.whatsapp', { 
    duration: 2000,
    origin: 'right',
    distance: '100px',
    reset: true
});