import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js';
import { SimplexNoise } from 'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/math/SimplexNoise.js';
import { generateHeightmap } from './generateHeightmap.js';

const geometry = new THREE.PlaneGeometry(4000, 4000, 100, 100);
const material = new THREE.MeshBasicMaterial({ color: 'white', wireframe: true });
export const plane = new THREE.Mesh(geometry, material);

const heightmap = generateHeightmap(101, 101, 0.1);
const vertices = geometry.attributes.position.array;
for (let y = 0; y < 101; y++) {
  for (let x = 0; x < 101; x++) {
    const index = (y * 101 + x) * 3;
    vertices[index + 2] = heightmap[y][x] * 100; // Ajusta el factor de escala según sea necesario
  }
}

geometry.attributes.position.needsUpdate = true;
