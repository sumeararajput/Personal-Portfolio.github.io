// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections active Link 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    // Sticky Navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toogle icon & navbar when click navbar link (scrool)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// scroll reveal

ScrollReveal({ 
    reset: false ,
    distance:'80px',
    duration:2000,
    delay: 200
    
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-col-1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-col-2', { origin: 'right' });


// // typed text js 
// const typed = new Typed('.multiple-text', {
//     strings:[' FullStack Developer', ' Designer'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop: true
// });

function dark(sun) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    sun.classList.toggle("bxs-moon");
    let togimg = document.getElementById('image-home');
    let togimg2 = document.getElementById('image-about');
    if(togimg.src.match('profile.jpg')){
        togimg.src = 'profile.jpg';
    }else{
        togimg.src = 'profile.jpg';
    }
    if(togimg2.src.match('profile2.jpg')){
        togimg2.src = 'profile2.jpg';
    }else{
        togimg2.src = 'profile2.jpg';
    }
    

 }

//  about tab link 

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
        // tablink.classList.remove("active")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-contents")
    }

    event.currentTarget.classList.add('active-link');
    event.currentTarget.classList.add('active');

    document.getElementById(tabname).classList.add("active-contents")
    document.getElementById(tabname).classList.add("desactive")
    

}