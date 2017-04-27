console.log("Hello");

var imgOutput = document.getElementById("arrow");
//math.random()
//set up if statement if math.random < .5 show the left arrow else show right arrow

document.addEventListener("click", function(event){

	if (Math.random(event) < .5){

	imgOutput.src = "images/arrowLeft.png";
	} else {
		imgOutput.src = "images/arrowRight.png";
	}
 console.log("event",event)
});