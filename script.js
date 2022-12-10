let canvas = document.getElementById('canvas');
/** @type CanvasRenderingContext2D */
let ctx = canvas.getContext('2d');
let width = 0;
let height = 0;
let pixelRatio = 1;
let objects = [];
let gravity = 9.8;
let elapsedTime = 0;
let lastTime = Date.now();

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
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
];

const currentNewYear = [
  [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
];

const explosion = [
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
];

const happyHolidays = [
  [
    1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1,
    1,
  ],
  [
    1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
    0,
  ],
  [
    1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0,
    0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1,
    0,
  ],
  [
    1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0,
    1,
  ],
  [
    1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1,
    0,
  ],
];

function fillCircle(x, y, radius, opacity, color) {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.globalAlpha = opacity;
  ctx.arc(x, y, radius / pixelRatio, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randColor() {
  return (
    'rgb(' + rand(0, 255) + ', ' + rand(200, 255) + ', ' + rand(0, 255) + ')'
  );
}

const maxTime = 1500;

class Particle {
  constructor(x, y, radius, force, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vel = { x: 0, y: 0 };
    this.time = new Date();
    this.force = force;
    this.remove = false;
  }
  draw() {
    this.vel.y += gravity;

    this.vel.x += this.force.x;
    this.vel.y += this.force.y;

    this.x += this.vel.x * elapsedTime;
    this.y += this.vel.y * elapsedTime;

    this.force = { x: 0, y: 0 };

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    const opacity = 1.2 - (new Date() - this.time) / maxTime;

    fillCircle(this.x, this.y, this.radius, opacity, this.color);
    ctx.restore();
  }
  update() {
    if (new Date() - this.time > maxTime) {
      this.remove = true;
    }
  }
}

function randomParticles(x, y, color) {
  for (let i = 0; i < 50; i++) {
    const radius = rand(1, 3);
    const force = { x: rand(-300, 300), y: rand(-300, 300) };
    objects.push(new Particle(x, y, radius, force, color));
  }
}

function squareParticles(x, y, color) {
  for (let i = -4; i < 4; i++) {
    for (let j = -4; j < 4; j++) {
      const radius = rand(1, 3);
      const force = { x: i * 100, y: j * 100 };
      objects.push(new Particle(x, y, radius, force, color));
    }
  }
}

function matrixParticles(x, y, color, m) {
  let s = 10;
  let length = rand(4, 10);

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] == 1) {
        for (let k = 0; k < length; k++) {
          const radius = 3 / k + 1;
          const force = {
            x: (j - m[i].length / 2) * s * k,
            y: (i - m.length / 2) * s * k,
          };
          objects.push(new Particle(x, y, radius, force, color));
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
      this.explode();
    }
  }
  explode() {
    const imgs = [star, currentNewYear, explosion, happyHolidays];
    if (Math.random() > 0.8) {
      randomParticles(this.x, this.y, this.color);
    } else if (Math.random() > 0.7) {
      squareParticles(this.x, this.y, this.color);
    } else {
      const randomMatrix = imgs[Math.floor(Math.random() * imgs.length)];
      matrixParticles(this.x, this.y, this.color, randomMatrix);
    }
    this.remove = true;
  }
}

window.addEventListener('resize', resize);

function resize(e) {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  pixelRatio = window.devicePixelRatio || 1;
}

function runRenderLoop(now) {
  elapsedTime = (now - lastTime) / 1000;
  lastTime = now;

  ctx.fillStyle = 'rgba(0, 0, 0, .5)';
  ctx.fillRect(0, 0, width, height);

  for (let i = objects.length - 1; i > 0; i--) {
    let o = objects[i];
    o.draw();
    o.update();

    if (o.remove) {
      objects.splice(i, 1);
    }
  }

  if (rand(0, 10) < 3) {
    const x = rand(0, width);
    const y = height;
    const radius = 3;
    const force = { x: 0, y: rand(-100, -height * 2) };
    objects.push(new Firework(x, y, radius, force));
  }

  window.requestAnimationFrame(runRenderLoop);
}

window.onload = function () {
  resize();
  runRenderLoop(0);
};
