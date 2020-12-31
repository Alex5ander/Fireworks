var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var objects = [];
var gravity = 0.98;
function rand(min, max){
	return min + Math.floor(Math.random() * ((max + 1) - min));
}
function randColor(){
	return "rgb("+rand(0, 255)+", "+rand(0, 255)+", "+rand(0, 255)+")";
}

class Particle{
	constructor(x, y, radius, force, color){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.vel = {x:0, y:0};
		this.force = force;
		this.time = 1;
	}
	draw(){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.globalAlpha = this.time;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
	update(){
		this.vel.y += gravity;
		
		this.vel.x += this.force.x;
		this.vel.y += this.force.y;
		
		this.x += this.vel.x;
		this.y += this.vel.y;
		
		this.time -= .09;
		
		this.force = {x:0, y:0};
	}
}

class Firework extends Particle{
	constructor(x, y, radius, force){
		super(x, y, radius, force);
		this.color = randColor();
	}
	update(){
		this.vel.y += gravity;
		
		this.vel.x += this.force.x;
		this.vel.y += this.force.y;
		
		this.x += this.vel.x;
		this.y += this.vel.y;
		
		if(this.vel.y >= 0){
			this.time = 0;
			this.explode();
		}
		
		this.force = {x:0, y:0};
	}
	explode(){
		for(var i = 0; i < 100; i++){
			objects.push(
				new Particle(
					this.x, 
					this.y, 
					rand(1, 3),
					{x:rand(-10, 10), y:rand(-10, 10)},
					this.color
				)
			);
		}
	}
}

window.addEventListener("resize", function(e){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

function gameloop(){
	ctx.fillStyle = "rgba(0, 0, 0, .5)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	for(var i = 0; i < objects.length; i++){
		var o = objects[i];
		o.draw();
		o.update();
		if(o.time <= 0){
			objects.splice(i, 1);
			i--;
		}
	}
	
	ctx.fillStyle= "white";
	ctx.font = "2em Verdana";
	ctx.textAlign = "center";
	var fulldate = new Date();
	var date = fulldate.toLocaleDateString("pr-br", {day:"numeric", month:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"}).split(" ");
	ctx.fillText(date[0], canvas.width/2, 200);
	ctx.fillText(date[1], canvas.width/2, 250);
	
	if(fulldate.getDate() == 31){
		if(rand(0, 10) <= 9){
			objects.push(new Firework(rand(0, canvas.width), canvas.height, 3, {x:0, y:rand(-18, -canvas.height * .07)}));
		}
		ctx.font = "3em Verdana";
		ctx.fillText("Feliz Ano Novo!", canvas.width/2, 100);
	}
	
	setTimeout(gameloop, 1000 / 60);
}

gameloop();