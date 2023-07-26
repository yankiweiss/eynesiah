let slideIndex = 1;  
showSlides(slideIndex); 

// Next/previous controls
function plusSlides(n) {  
  showSlides(slideIndex += n); 
  
}

// Thumbnail image controls
function currentSlide(n) { 
  showSlides(slideIndex = n); 
}

function showSlides(n) { 
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";

  console.log(slides.length)
}

// below is the Typowriter effect;



var i = 0;
var txt = '...ארץ ישראל נסיעה';
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}

typeWriter()


