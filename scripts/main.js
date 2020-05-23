window.addEventListener("load", function () {
	let buttonLeft = document.getElementById("left");
	let buttonRight = document.getElementById("right");

	let tanyaImage = document.getElementById("tanya");
	let johnImage = document.getElementById("john");

	let developer = document.getElementById("developer");
	let engineer = document.getElementById("engineer");

	let image = true;

	let changeImage = () => {
		if (image) {
			tanyaImage.style.visibility = "hidden";
			engineer.style.visibility = "hidden";

			johnImage.style.visibility = "visible";
			developer.style.visibility = "visible";
		} else {
			tanyaImage.style.visibility = "visible";
			engineer.style.visibility = "visible";

			johnImage.style.visibility = "hidden";
			developer.style.visibility = "hidden";
		}
		image = !image;
	};

	buttonLeft.addEventListener("click", changeImage);

	buttonRight.addEventListener("click", changeImage);
});
