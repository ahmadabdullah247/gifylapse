/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.button',{delay: 50});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 100}); 
sr.reveal('.about__text',{delay: 100}); 

/*SCROLL blog*/
sr.reveal('.blog__subtitle',{}); 
sr.reveal('.blog__text',{}); 
sr.reveal('.blog__data',{interval: 50}); 
sr.reveal('.blog__img',{delay: 100});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 50}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 50}); 



