
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // ONE TIME ONLY
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(el => observer.observe(el));

