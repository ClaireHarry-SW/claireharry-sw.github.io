'use strict'

function sideMenu() {
	var side = document.getElementById("sidebar"),
	about = document.getElementById("about");
	side.style.width = side.style.width === "125px" ? '0px' : '125px';
	about.style.marginRight = about.style.marginRight === "125px" ? '0px' : '125px';
}

function saveForm() {
	
	document.cookie = "fname=" + escape(document.getElementById('fname').value) + ";";
	document.cookie = "lname=" + escape(document.getElementById('lname').value) + ";";
	document.cookie = "email=" + escape(document.getElementById('email').value) + ";";
	document.cookie = "message=" + escape(document.getElementById('message').value) + ";";

	document.getElementById('submission').innerHTML = "Message Submitted Successfully!";
}

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
  dots[slideIndex-1].className += " active";
}