/* ----- VISOR 3D THREE.JS ----- */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / 500,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 500);
document.getElementById("viewer").appendChild(renderer.domElement);

const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
scene.add(light);

camera.position.set(0, 1, 3);

/* Cargar modelo GLTF */
const loader = new THREE.GLTFLoader();
loader.load("assets/model.gltf", function (gltf) {
    scene.add(gltf.scene);
    animate();
});

/* Control orbital simple */
let isDragging = false;
let previousX = 0;

renderer.domElement.addEventListener("mousedown", e => {
    isDragging = true;
    previousX = e.clientX;
});

renderer.domElement.addEventListener("mouseup", () => isDragging = false);

renderer.domElement.addEventListener("mousemove", e => {
    if (isDragging) {
        const delta = (e.clientX - previousX) * 0.01;
        scene.rotation.y += delta;
        previousX = e.clientX;
    }
});

/* Animación */
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".lightbox-item img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".lightbox-item img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

