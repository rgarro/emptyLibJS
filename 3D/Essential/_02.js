/**
 * Example of a 3D rendered Globe
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function _02(p){
  this.ini_camera_x = 35;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;
  this.cloudGeometry = null;
  this.show_stats = true;
  this.show_control_gui = true;
  Basic_3D_Template.call(this.p);
  this.l = new Light();
}

_02.prototype = Object.create(Basic_3D_Template.prototype);

_02.prototype.constructor = _02;

_02.prototype.postInit = function(){
  var sphereGeometry = new THREE.SphereGeometry(15,30,30);
  var sphereMaterial = this.createEarthMaterial();
  var earthMesh = new THREE.Mesh(sphereGeometry,sphereMaterial);
  earthMesh.name = 'earth';
  this.scene.add(earthMesh);
  this.cloudGeometry = new THREE.SphereGeometry(sphereGeometry.parameters.radius*1.01,30,30);
  var cloudMesh = new THREE.Mesh(this.cloudGeometry,this.createCloudMaterial());
  cloudMesh.name = 'clouds';
  this.scene.add(cloudMesh);
}

_02.prototype.setLights = function(){
  // now add some better lighting
  var ambientLight = this.l.getAmbient(0x9d2020,'ambient');
  this.scene.add(ambientLight);
  // add sunlight light
  var directionalLight = this.l.getDirectional(0xffffff,'directional',new THREE.Vector3(100,10,-50));
  this.scene.add(directionalLight);
}

_02.prototype.createCloudMaterial = function(){
  var material =  this.getTexturedMaterial("/assets/textures/planets/fair_clouds_4k.png");
  material.transparent = true;
  return material;
}

_02.prototype.createEarthMaterial = function(){
  return this.getTexturedMaterial("/assets/textures/planets/earthmap4k.jpg");
}

_02.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

_02.prototype.preRender = function(){
  this.cameraControl.update();
  this.scene.getObjectByName('earth').rotation.y+=control.rotationSpeed;
  this.scene.getObjectByName('clouds').rotation.y+=control.rotationSpeed*1.1;
  //this.scene.getObjectByName('ambient').color = new THREE.Color(control.ambientLightColor);
  //this.scene.getObjectByName('directional').color = new THREE.Color(control.directionalLightColor);
}
