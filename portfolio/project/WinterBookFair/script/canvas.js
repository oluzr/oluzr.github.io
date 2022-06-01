
var stars = [];
var velocity = 2;
var generateRate = 150 
var newRandom;

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

for(var i = 0; i <= 3000; i++) {
	var star = new Path.Circle(new Point(view.size.width, view.size.height) * Point.random(), randomInt(0.5, 2))
	stars.push(star)
}


for(var i = 0; i < stars.length; i++) {
	var chance = Math.random()

	if(chance < 0.025) {
		stars[i].fillColor = "rgb(62, 200, 255)";
	}

	else if(chance < 0.6) {
		stars[i].fillColor = "skyblue";
	}

	else {
		stars[i].fillColor =  "white";
	}
}


for(var i = 0; i < stars.length; i++) {
	var assignedRate = Math.random() * velocity + 0.1
	stars[i].rate = assignedRate;
}

function onKeyDown(event) {

	if(event.key == 'd') {
		velocity += 1
		for(var i = 0; i < stars.length; i++) {
		var assignedRate = Math.random() * velocity + 0.1
		stars[i].rate = assignedRate;

		}
	}


	else if(event.key == 'a') {
		velocity -= 1
		for(var i = 0; i < stars.length; i++) {
		var assignedRate = Math.random() * velocity + 0.1
		stars[i].rate = assignedRate;
		}
	}

}


function onFrame(event) {
	for(var i = 0; i < stars.length; i++) {
		stars[i].translate(stars[i].rate, 0)
		if(stars[i].position.x > view.size.width) {
				stars[i].position.x = 0;
	}

	else if(stars[i].position.x < 0) {
		stars[i].position.x = view.size.width;
	}

	
	}
	
}

