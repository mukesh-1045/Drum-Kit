function playSound(soundNote){

	switch (soundNote) {
	case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
		// statements_1
		break;

	case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

	case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

	case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

	case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

	case "k":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

	case "l":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

	default:
		//console.log(soundNote);
		// statements_def
		//document.querySelector("h1").classList.add("red");
		document.querySelector("h1").classList.add("game-over");
		setTimeout(function () {
		document.querySelector("h1").classList.remove("game-over");
		}, 100);
		break;
}
}


function buttonAnimation(currentKey){
	var activeBtn = document.querySelector("."+currentKey);
	activeBtn.classList.add("pressed");

	setTimeout(function () {
		activeBtn.classList.remove("pressed");
	}, 100);
}



for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

	playSound(this.innerHTML);
	buttonAnimation(this.innerHTML);
});

}


document.addEventListener("keydown", function (event) {
	playSound(event.key);
	buttonAnimation(event.key);
});


