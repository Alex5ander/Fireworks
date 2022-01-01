let canvas = document.getElementById("canvas");
/** @type CanvasRenderingContext2D */
let ctx = canvas.getContext("2d");
let width = 0;
let height = 0;
let pixelRatio = 1;
let objects = [];
let gravity = 9.8;
let elapsedTime = 0;
let lastTime = 0;
let gradient = '';

const star = [
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
];

const currentNewYear = [
	[0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
	[1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
];

function fillText(text, x, y, color) {
	ctx.fillStyle = color;
	ctx.font = "1rem Arial";
	ctx.fillText(text, x, y);
}
function fillCircle(x, y, radius, time, color) {
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.globalAlpha = time;
	ctx.arc(x, y, radius * pixelRatio, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randColor() {
	return "rgb(" + rand(0, 255) + ", " + rand(200, 255) + ", " + rand(0, 255) + ")";
}

class Particle {
	constructor(x, y, radius, force, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.vel = { x: 0, y: 0 };
		this.force = force;
		this.time = 1;
	}
	draw() {
		this.vel.y += gravity;

		this.vel.x += this.force.x;
		this.vel.y += this.force.y;

		this.x += this.vel.x * elapsedTime;
		this.y += this.vel.y * elapsedTime;

		this.force = { x: 0, y: 0 };
		
		fillCircle(this.x, this.y, this.radius, this.time, this.color);
	}
	update() {
		this.time -= 0.1;
	}
}

function randomParticles(x, y, color) {
	for (let i = 0; i < 100; i++) {
		objects.push(
			new Particle(
				x,
				y,
				rand(1, 3),
				{ x: rand(-300, 300), y: rand(-300, 300) },
				color
			)
		);
	}
}

function squareParticles(x, y, color) {
	for (let i = -4; i < 4; i++) {
		for(let j = -4; j < 4; j++) {
			objects.push(
				new Particle(
					x,
					y,
					rand(1, 3),
					{ x: i * 100, y: j * 100 },
					color
				)
			);
		}
	}
}

function matrixParticles(x, y, color, m) {
	let s = 10;
	let length  = rand(2, 10);
	
	for (let i = 0; i < m.length; i++) {
		for(let j = 0; j < m[i].length; j++) {
			if(m[i][j] == 1) {
				for(let k = 0; k < length; k++) {
					objects.push(
						new Particle(
							x,
							y,
							3 / k + 1,
							{ x: (j - m[i].length / 2) * s * k, y: (i - m.length / 2) * s * k },
							color
						)
					);
				}
			}
		}
	}
}

class Firework extends Particle {
	constructor(x, y, radius, force) {
		super(x, y, radius, force, randColor());
	}
	update() {
		if (this.vel.y >= 0) {
			this.time = 0;
			this.explode();
		}
	}
	explode() {
		if(Math.random() > 0.8) {
			randomParticles(this.x, this.y, this.color);
		}else if(Math.random() > 0.7) {
			squareParticles(this.x, this.y, this.color);
		}else if(Math.random() > 0.6) {
			matrixParticles(this.x, this.y, this.color, star);
		}else if(Math.random() > 0.5) {
			matrixParticles(this.x, this.y, this.color, currentNewYear);
		}
	}
}

window.addEventListener("resize", resize);

function resize() {
	width = window.innerWidth;
	height = window.innerHeight;
	
	canvas.width = width;
	canvas.height = height;
	
	gravity = height / 60;
	gradient = ctx.createLinearGradient(0, 0, 0, width);
	gradient.addColorStop(0.3, 'black');
	gradient.addColorStop(1, 'darkblue');
	
	pixelRatio = window.devicePixelRatio || 1;
}

function runRenderLoop() {
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, width, height);
	
	let now = Date.now();
	elapsedTime = now - lastTime;
	lastTime = now;
	elapsedTime /= 1000;
	
	if(lastTime !== 0) {
		for (let i = 0; i < objects.length; i++) {
			let o = objects[i];
			o.draw();
			o.update();
			
			if(o.time <= 0) {
				objects.splice(i, 1);
				i--;
			} 
		}

		if (rand(0, 10) > 3) {
			objects.push(new Firework(rand(0, width), height, 3, { x: 0, y: rand(-height * .25, -height * .75) }));
		}
	}

	window.requestAnimationFrame(runRenderLoop);
}

window.onload = function() {
	resize();
	runRenderLoop();
}
