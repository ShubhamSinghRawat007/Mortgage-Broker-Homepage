// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to toggle menu visibility on small screens
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});
