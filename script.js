// togo icon navbar
let menuIcon = document.querySelector('#menu-icon');  // Corrected the typo in the selector
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // Corrected the syntax error
    navbar.classList.toggle('active');  // Corrected the syntax error
}


//  scroll selector
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;  // Fixed typo here
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar  
            navLinks.forEach(link => {  // Fixed typo here
                link.classList.remove('active');  // Fixed typo here
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scrool) 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
    
};
