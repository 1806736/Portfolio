let img;

function preload() {
  img = loadImage('images/palmtrees.jpg');
}

function setup() {
  createCanvas(500, 500);
  img.resize(width, height);
  noSmooth();
  image(img, 0, 0);
}

function draw() {
  const y = frameCount % height;
  const range = getPixelRange(y);

  for (let x = 0; x < width; x++) {
    const leftX = constrain(x - range, 50, width);
    const rightX = constrain(x + range, 50, width);
    let sampleX = random(leftX, rightX);

    const topY = constrain(y - 2, 0, height);
    const bottomY = constrain(y + 2, 0, height);
    let sampleY = random(topY, bottomY);

    const pixelColor = img.get(sampleX, sampleY);

    stroke(pixelColor);
    point(x, y);
  }
}

function getPixelRange(y) {
  return map(pow(y, 2),
    0, pow(height, 2),
    0, 40);
}