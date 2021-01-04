const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true}); //add alpha:true, antialias: true
// то что выше есть основое для создание 3Д

camera.position.z = 60;
camera.position.y = 15;

renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.domElement.setAttribute('id', 'animeGirl');
document.body.appendChild( renderer.domElement );

const aLight = new THREE.AmbientLight(0x404040, 1);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 1);
pLight.position.set(0, -3, 7);
scene.add(pLight);

/*  const helper = new THREE.PointLightHelper(pLight);
scene.add(helper); */

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('/3d/scene.gltf', function(gltf) {
    obj = gltf;
    obj.scene.scale.set(1.3, 1.3, 1.3);

    scene.add(obj.scene);
});

animate();

function animate() {
    requestAnimationFrame(animate);
    if (obj) {
        obj.scene.rotation.y += 0.02;
       // obj.scene.rotation.x += 0.001;
     
        renderer.render(scene, camera);
    }

}