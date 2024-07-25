document.addEventListener('DOMContentLoaded', () => {
    const projectsHeader = document.querySelector('.projectsHeader');
    const projectCards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing after the fade-in
            }
        });
    }, {
        threshold: 0.3 // Trigger when 10% of the element is in view
    });

    observer.observe(projectsHeader);
    projectCards.forEach(card => observer.observe(card));
});