(()=>{

	//menu animation

	let menu = document.querySelector(".menu nav"),
	    location = document.querySelector(".location"),
	    menuButton = document.querySelector("#menu_icon"),
	    menuOverlay = document.querySelector(".black-menu-overlay");

	menuButton.addEventListener('click',()=>{
		menu.classList.toggle("opened-menu");
		location.classList.toggle("opened-location");
		menuOverlay.classList.toggle("opened-overlay");
		document.querySelector(".top").classList.toggle("top-rotate");
		document.querySelector(".bottom").classList.toggle("bottom-rotate");
		document.querySelector(".middle").classList.toggle("middle-opacity");
	});

})();
