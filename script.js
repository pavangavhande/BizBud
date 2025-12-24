let dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
    dots.forEach(dot => dot.classList.remove("active"));

    dots[i].classList.add("active");
}

setInterval(() => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}, 3000);
