import { SimplexNoise } from 'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/math/SimplexNoise.js';

export function generateHeightmap(width, height, scale) {
  const noise = new SimplexNoise();
  const heightmap = [];

  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const value = noise.noise2D(x * scale, y * scale);
      row.push(value);
    }
    heightmap.push(row);
  }

  return heightmap;
}
