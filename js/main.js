'use strict'

function sideMenu() {
	var side = document.getElementById("sidebar"),
	about = document.getElementById("about");
	side.style.width = side.style.width === "100px" ? '0' : '100px';
	about.style.marginRight = about.style.marginRight === "100px" ? '0' : '100px';
}
