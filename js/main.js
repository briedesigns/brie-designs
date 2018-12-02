(function() {
"use strict";

	var burgMenu = document.querySelector("#burgMenu");
	var hamburger = document.querySelector("#hamburger");
	

	function burgmenu() {
		hamburger.classList.toggle("slide");
	}

	burgMenu.addEventListener("click", burgmenu, false);

})();
