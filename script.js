document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.reveal');
    const options = {
        threshold: 0.1
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('active');
            revealOnScroll.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        revealOnScroll.observe(section);
    });

    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
