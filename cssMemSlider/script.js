var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    
    const slides = document.getElementsByClassName("item");
    const dots = document.getElementsByClassName("slider-dots-item");
    const text = document.getElementsByClassName("slide-text");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i=0; i < text.length; i++) {
        text[i].style.display = 'none';
    }
    
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    text[slideIndex -1].style.display = 'block';
}
