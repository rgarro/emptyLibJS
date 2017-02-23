/**
 * Example of a 3D rendered Globe
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function _02(p){
  Basic_3D_Template.call(this.p);
  this.ini_camera_x = 35;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;
}

_02.prototype = Object.create(Basic_3D_Template.prototype);

_02.prototype.constructor = _02;

_02.prototype.postInit = function(){
  var sphereGeometry = new THREE.SphereGeometry(15,30,30);
  //var sphereMaterial = new THREE.MeshNormalMaterial();
  var sphereMaterial = this.createEarthMaterial();
  var earthMesh = new THREE.Mesh(sphereGeometry,sphereMaterial);
  this.scene.add(earthMesh);
}

_02.prototype.createEarthMaterial = function(){
  var earthTexture = THREE.ImageUtils.loadTexture("/emptyLibJS/assets/textures/planets/earthmap4k.jpg");
  var earthMaterial = new THREE.MeshBasicMaterial();
  earthMaterial.map = earthTexture;
  return earthMaterial;
}

_02.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

_02.prototype.preRender = function(){
  this.cameraControl.update();
}
