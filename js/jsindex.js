document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides(slideIndex);

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.addEventListener('click', function() { moveSlide(-1); });
    nextButton.addEventListener('click', function() { moveSlide(1); });

    function moveSlide(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    function showSlides(n) {
        let slides = document.querySelectorAll(".carousel-images img");
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        slides.forEach(slide => slide.style.display = 'none');
        slides[slideIndex].style.display = 'block';
    }
});

window.onload = function() {
    var currentYear = new Date().getFullYear();
    var copyrightText = "&copy; " + currentYear + " McGovern-UFC";
    document.getElementById("copyright").innerHTML = copyrightText;

};