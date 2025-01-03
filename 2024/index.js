import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';
import { FontLoader } from 'three/examples/jsm/Addons.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import font_json from './Arvo_Regular.json'

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xffffff, 0.001);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 1.5;

const renderPass = new RenderPass(scene, camera);
const composite = new EffectComposer(renderer);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  3,
  0,
  0
);
composite.addPass(renderPass);
composite.addPass(bloomPass);

new OrbitControls(camera, renderer.domElement);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
const hemisphereLight = new THREE.HemisphereLight(0x000044, 0x000000, 1);
scene.add(directionalLight);
scene.add(hemisphereLight);

const createText = () => {
  const font = new FontLoader().parse(font_json);
  const geometry = new TextGeometry('Feliz 2024', {
    font,
    size: 16,
    depth: 1,
    curveSegments: 12,
    bevelEnabled: false,
    bevelThickness: 2,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5
  });
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  geometry.computeBoundingBox();
  const centerOffset =
    -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  mesh.position.x = centerOffset;
  mesh.userData.time = Date.now();
  mesh.userData.update = () => {
    if (Date.now() - mesh.userData.time > 300) {
      const rand = () => Math.random();
      mesh.material.emissive.setRGB(rand(), rand(), rand());
      mesh.userData.time = Date.now();
    }
  };

  scene.add(mesh);
}

const gravity = new THREE.Vector3(0, -0.09807, 0);

const createParticle = (
  position = new THREE.Vector3(0, 0, 0),
  force = new THREE.Vector3(0, 0, 0),
  color = new THREE.Color(0xffffff)
) => {
  const geometry = new THREE.SphereGeometry();
  const material = new THREE.MeshPhongMaterial({ color, emissive: color, emissiveIntensity: 2 });
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
  const amount = 50 + Math.floor(Math.random() * 100);
  const scale = 1;

  const mesh = new THREE.InstancedMesh(
    new THREE.SphereGeometry(Math.random() * 2),
    new THREE.MeshPhongMaterial({ color, emissive: color, emissiveIntensity: 1 + Math.random() * 2, }),
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
    mesh.userData.velocities.push(
      new THREE.Vector3()
        .randomDirection()
        .add(new THREE.Vector3().random())
        .multiplyScalar(Math.random() * 2)
    );
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
    if (Date.now() - mesh.userData.time > 1000) {
      scene.remove(mesh);
    }
  };

  scene.add(mesh);
};

const firework = () => {
  const position = new THREE.Vector3().randomDirection().multiplyScalar(200);
  const force = new THREE.Vector3(0, 2 + Math.random() * 8, 0);
  const color = new THREE.Color(Math.random() * 0xffffff);

  const geometry = new THREE.ConeGeometry(1, 4);
  const material = new THREE.MeshPhongMaterial({ color, emissive: color, emissiveIntensity: 1.2 });

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
        color
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

camera.position.z = 200;
let last = Date.now();

createText();

renderer.setAnimationLoop(() => {
  scene.children.forEach((e) => {
    if (e.userData.update) {
      e.userData.update();
    }
  });

  if (Date.now() - last > 100) {
    firework();
    last = Date.now();
  }

  composite.render();
})

document.body.appendChild(renderer.domElement);