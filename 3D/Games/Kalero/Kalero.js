/**
 * Caterpillar White Stone War
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Kalero(){
  this.ini_camera_x = 35;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;
  this.tank = null;
  this.show_stats = true;
  this.show_control_gui = true;
  this.control = null;
  this.l = new Light();
  Game.call(this.p);
}

Kalero.prototype = Object.create(Game.prototype);

Kalero.prototype.constructor = Kalero;

Kalero.prototype.postInit = function(){
  var p = this;
  this.loadTank();
  this.setLights();
}

Kalero.prototype.loadTank = function(){
  this.tank = new Tank();
  this.tank.setParent(this);
  this.tank.loadModel("/emptyLibJS/3D/Games/Kalero/assets/T43.json");
  this.tank.init();
}

Kalero.prototype.setLights = function(){
  // now add some better lighting
  var ambientLight = new THREE.AmbientLight(0xF47a42);
  ambientLight.name='ambient';
  this.scene.add(ambientLight);

  // add sunlight (light
  var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position = new THREE.Vector3(100,10,-50);
  directionalLight.name='directional';
  this.scene.add(directionalLight);

  this.control = new function () {
      this.rotationSpeed = 0.001;
      this.ambientLightColor = ambientLight.color.getHex();
      this.directionalLightColor = directionalLight.color.getHex();
  };
}

Kalero.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

Kalero.prototype.preRender = function(){
  this.cameraControl.update();

  this.scene.getObjectByName('ambient').color = new THREE.Color(0x111111);
  this.scene.getObjectByName('directional').color = new THREE.Color(0xffffff);
}
