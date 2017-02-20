function _01(p){
  Basic_3D_Template.call(this.p);
}

_01.prototype = Object.create(Basic_3D_Template.prototype);

_01.prototype.constructor = _01;

_01.prototype.postInit = function(){
  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(20, 20);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 0;
  plane.position.y = -2;
  plane.position.z = 0;

  // add the plane to the scene
  this.scene.add(plane);

  // create a cube
  var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
  var cubeMaterial = new THREE.MeshLambertMaterial({color: 'red'});
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.castShadow = true;

  // add the cube to the scene
  this.scene.add(cube);
  // add spotlight for the shadows
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(10, 20, 20);
  spotLight.shadowCameraNear = 20;
  spotLight.shadowCameraFar = 50;
  spotLight.castShadow = true;

  this.scene.add(spotLight);
}
