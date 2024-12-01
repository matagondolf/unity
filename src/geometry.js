import * as THREE from 'three';
import SimplexNoise from 'simplex-noise';

const geometry = new THREE.PlaneGeometry(10, 10, 100, 100);
const material = new THREE.MeshBasicMaterial({ color: 'white', wireframe: true });
export const plane = new THREE.Mesh(geometry, material);

const noise = new SimplexNoise();
const vertices = geometry.attributes.position.array;
for (let i = 0; i < vertices.length; i += 3) {
  const x = vertices[i];
  const y = vertices[i + 1];
  vertices[i + 2] = noise.noise2D(x, y) * 2;
}

geometry.attributes.position.needsUpdate = true;
