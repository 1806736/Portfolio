
function addScene() {
  return new THREE.Scene();
}

function createRenderer() {
  let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.gammaFactor = 10.7;

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 5.25;

  return renderer;
}

function setCamera() {
  const camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    10,
    2000
  );
  camera.position.set(1, 1, 600);

  return camera;
}

function setControls() {
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.enableDamping = true;

  return controls;
}

function setPointLight() {
  let pointlight = new THREE.PointLight(0xffffff, 1);
  pointlight.position.set(200, 200, 200);
  scene.add(pointlight)
  return pointlight;
}

function createSphereMesh(envmap) {
  const texture = createSphereTexture();

  // https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial
  const ballMaterial = {
    color: 0x000,
    roughness: 0.3,
    metalness: 1,
    reflectivity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0,
    normalMap: texture,
    normalScale: new THREE.Vector2(0.5, 0.17),
    envMap: envmap.texture,
    side: THREE.DoubleSide,
  };

  let ballGeo = new THREE.SphereGeometry(100, 100, 100);
  let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
  return new THREE.Mesh(ballGeo, ballMat);

  // HELPER
  function createSphereTexture() {
    let texture = new THREE.CanvasTexture(new THREE.FlakesTexture());
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.x = 2;
    texture.repeat.y = 2;

    return texture;
  }
}

function animate(controls, renderer) {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(() => animate(controls, renderer));
}
