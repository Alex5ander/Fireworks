import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
const width = window.innerWidth;
const height = window.innerHeight;
const gravity = new THREE.Vector3(0, -0.09807, 0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);

camera.position.z = 50;
camera.position.y = 3;

const hemisphereLight = new THREE.HemisphereLight(0x000000, 0x00000000, 1);
const directionalLight = new THREE.DirectionalLight(0x222222, 10);
directionalLight.position.y = 10;

scene.add(hemisphereLight);
scene.add(directionalLight);

const render = new THREE.WebGLRenderer();
render.setSize(width, height);
render.setClearColor(0x000);

const renderPass = new RenderPass(scene, camera);
const composite = new EffectComposer(render);
composite.addPass(renderPass);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.6,
  0.1,
  0.1
);

composite.addPass(bloomPass);

render.toneMapping = THREE.CineonToneMapping;
render.toneMappingExposure = 1.5;

const gridHelper = new THREE.GridHelper(100, 100);
scene.add(gridHelper);

new OrbitControls(camera, render.domElement);

document.body.appendChild(render.domElement);

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
  [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
];

const starX = [
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

function matrixParticles(color = nw, m) {
  let s = 2;
  let length = 0.1;
  let config = {
    forces: [],
    radius: [],
    color,
  };

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] == 1) {
        for (let k = 0.07; k < length; k += 0.03) {
          const radius = k * 2;

          const x = (j - m[i].length / 2) * s * k;
          const y = -(i - m.length / 2) * s * k;

          config.forces.push(new THREE.Vector3(x, y, 0));
          config.radius.push(radius);
        }
      }
    }
  }

  return config;
}

const randomColor = () => new THREE.Color(Math.random() * 0xffffffff);

const randomVector = (max, min) =>
  new THREE.Vector3(Math.random() * max - min, 0, Math.random() * max - min);

const createParticle = (
  position = new THREE.Vector3(0, 0, 0),
  force = new THREE.Vector3(0, 0, 0),
  color = new THREE.Color(0xffffff)
) => {
  const geometry = new THREE.SphereGeometry(1);
  const material = new THREE.MeshPhongMaterial({
    color,
    emissive: color,
    emissiveIntensity: 1.2,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);

  mesh.userData.velocity = force;
  mesh.userData.isParticle = true;
  mesh.userData.time = new Date();

  mesh.userData.update = () => {
    mesh.userData.velocity.add(gravity);
    mesh.position.add(mesh.userData.velocity);

    if (new Date() - mesh.userData.time > 1000) {
      scene.remove(mesh);
    }
  };

  return mesh;
};

const dummy = new THREE.Object3D();
const matrix = new THREE.Matrix4();

const explosion = (
  position = new THREE.Vector3(0, 0, 0),
  color = new THREE.Color()
) => {
  const offset = matrixParticles(
    color,
    [currentNewYear, happyHolidays, star, starX][Math.floor(Math.random() * 4)]
  );

  const amount = offset.forces.length;
  const scale = 1;

  const mesh = new THREE.InstancedMesh(
    new THREE.SphereGeometry(),
    new THREE.MeshPhongMaterial({
      color,
      emissive: color,
      emissiveIntensity: Math.random() * 2,
    }),
    amount
  );

  mesh.userData.isExplosion = true;
  mesh.userData.velocities = [];
  mesh.userData.time = new Date();

  for (let i = 0; i < amount; i++) {
    mesh.getMatrixAt(i, matrix);
    matrix.decompose(dummy.position, dummy.rotation, dummy.scale);
    dummy.position.x = position.x;
    dummy.position.y = position.y;
    dummy.position.z = position.z;

    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    mesh.userData.velocities.push(offset.forces[i]);
  }

  mesh.userData.update = () => {
    for (let i = 0; i < amount; i++) {
      mesh.getMatrixAt(i, matrix);
      matrix.decompose(dummy.position, dummy.rotation, dummy.scale);

      mesh.userData.velocities[i].add(gravity);
      dummy.position.add(mesh.userData.velocities[i]);

      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (new Date() - mesh.userData.time > 1000) {
      scene.remove(mesh);
    }
  };

  scene.add(mesh);
};

const firework = (position = new THREE.Vector3(0, 0, 0)) => {
  const force = new THREE.Vector3(0, 2 + Math.random() * 8, 0);
  const color = randomColor();

  const geometry = new THREE.ConeGeometry(1, 4);
  const material = new THREE.MeshPhongMaterial({
    color,
    emissive: color,
    emissiveIntensity: 1.2,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);

  mesh.userData.velocity = force;

  mesh.userData.update = () => {
    mesh.userData.velocity.add(gravity);
    mesh.position.add(mesh.userData.velocity);

    scene.add(
      createParticle(
        new THREE.Vector3(
          mesh.position.x,
          mesh.position.y - 2,
          mesh.position.z
        ),
        new THREE.Vector3(Math.random(), 0, Math.random()),
        new THREE.Vector3(0xfff)
      )
    );

    if (mesh.userData.velocity.y < 0) {
      explosion(mesh.position, mesh.material.color);
      scene.remove(mesh);
    }
  };

  mesh.userData.isFirework = true;
  scene.add(mesh);
};

let last = new Date();
(function loop() {
  render.render(scene, camera);
  composite.render();

  if (new Date() - last > 100) {
    firework(randomVector(200, 100));
    last = new Date();
  }

  scene.children.forEach((e) => {
    if (e.userData.update) {
      e.userData.update();
    }
  });

  window.requestAnimationFrame(loop);
})();
