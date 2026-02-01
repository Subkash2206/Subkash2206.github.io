// Elite Minimalist Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Active Nav Link Logic
                const id = entry.target.getAttribute('id');
                const navLinks = document.querySelectorAll('.nav-links a');
                navLinks.forEach(link => {
                    link.classList.remove('active'); // You'll need to add .active styles in CSS if not present
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        // Optional: changing icon color or weight
                        link.style.color = 'var(--text-primary)';
                        const icon = link.querySelector('i');
                        if (icon) icon.style.color = 'var(--accent-color)';
                    } else {
                        // Reset styles for inactive links
                        link.style.color = '';
                        const icon = link.querySelector('i');
                        if (icon) icon.style.color = '';
                    }
                });
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    console.log("Portfolio Enhanced.");
});
