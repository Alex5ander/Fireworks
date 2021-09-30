var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var objects = [];
var gravity = 0.98;
var elapsedTime = 0;

function rand(min, max) {
	return min + Math.floor(Math.random() * ((max + 1) - min));
}
function randColor() {
	return "rgb(" + rand(0, 255) + ", " + rand(0, 255) + ", " + rand(0, 255) + ")";
}

class Particle {
	constructor(x, y, radius, force, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.vel = { x: 0, y: 0 };
		this.force = force;
		this.time = 5;
	}
	draw() {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.globalAlpha = this.time;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
	update() {
		this.vel.y += gravity;

		this.vel.x += this.force.x;
		this.vel.y += this.force.y;

		this.x += this.vel.x * elapsedTime;
		this.y += this.vel.y * elapsedTime;

		this.time -= 1 * elapsedTime;

		this.force = { x: 0, y: 0 };
	}
}

class Firework extends Particle {
	constructor(x, y, radius, force) {
		super(x, y, radius, force);
		this.color = randColor();
	}
	update() {
		this.vel.y += gravity;

		this.vel.x += this.force.x;
		this.vel.y += this.force.y;

		this.x += this.vel.x * elapsedTime;
		this.y += this.vel.y * elapsedTime;

		if (this.vel.y >= 0) {
			this.time = 0;
			this.explode();
		}

		this.force = { x: 0, y: 0 };
	}
	explode() {
		for (var i = 0; i < 100; i++) {
			objects.push(
				new Particle(
					this.x,
					this.y,
					rand(1, 3),
					{ x: rand(-100, 100), y: rand(-100, 100) },
					this.color
				)
			);
		}
	}
}

window.addEventListener("resize", function (e) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});
let lasTime = 0;

function gameloop() {
	ctx.fillStyle = "rgba(0, 0, 0, .3)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < objects.length; i++) {
		var o = objects[i];
		o.draw();
		o.update();
		if (o.time <= 0) {
			objects.splice(i, 1);
			i--;
		}
	}

	if (rand(0, 10) <= 9) {
		objects.push(new Firework(rand(0, canvas.width), canvas.height, 3, { x: 0, y: rand(-canvas.height * .1, -canvas.height * 0.75) }));
	}

	let now =+ new Date();
	elapsedTime = now - lasTime;
	lasTime = now;
	let fps = 1000 / elapsedTime;
	elapsedTime /= 1000;

	ctx.fillStyle = "white";
	ctx.font = "24px Arial";
	ctx.fillText("FPS: " + fps.toFixed(2), 10, 40);
	window.requestAnimationFrame(gameloop);
}

gameloop();
