/**
 * Example of a 3D rendered Globe
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function _02(p){
  Basic_3D_Template.call(this.p);
  this.cameraControl = null;
}

_02.prototype = Object.create(Basic_3D_Template.prototype);

_02.prototype.constructor = _02;

_02.prototype.postInit = function(){
  this.camera.position.x = 35;
  this.camera.position.y = 36;
  this.camera.position.z = 33;

  this.cameraControl = new THREE.OrbitControls(this.camera);

  var sphereGeometry = new THREE.SphereGeometry(15,30,30);
  var sphereMaterial = new THREE.MeshNormalMaterial();
  var earthMesh = new THREE.Mesh(sphereGeometry,sphereMaterial);
  this.scene.add(earthMesh);
}

_02.prototype.preRender = function(){
  this.cameraControl.update();
}
