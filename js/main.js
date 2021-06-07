'use strict'

function sideMenu() {
	var side = document.getElementById("sidebar"),
	about = document.getElementById("about");
	side.style.width = side.style.width === "100px" ? '0px' : '100px';
	about.style.marginRight = about.style.marginRight === "100px" ? '0px' : '100px';
}

function saveForm() {
	
	document.cookie = "fname=" + escape(document.getElementById('fname').value) + ";";
	document.cookie = "lname=" + escape(document.getElementById('lname').value) + ";";
	document.cookie = "email=" + escape(document.getElementById('email').value) + ";";
	document.cookie = "message=" + escape(document.getElementById('message').value) + ";";

	document.getElementById('submission').innerHTML = "Message Submitted Successfully!";
}