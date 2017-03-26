/**
 * Caterpillar White Stone War
 *
 * @author Rolando <rolando@emptyart.xyz>
 *
 */
function Kalero(){
  this.ini_camera_x = 35;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;
  this.tank = null;
  this.show_stats = true;
  this.show_control_gui = true;
  this.control = null;
  this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/floorb.png';
  this.clearColor = 0xa5b6c5;
  this.l = new Light();
  Game.call(this.p);
}

Kalero.prototype = Object.create(eO._3D.Templates.Game.prototype);

Kalero.prototype.constructor = Kalero;

Kalero.prototype.postInit = function(){
  var p = this;
  this.camera.position.set(0,150,400);
  this.camera.lookAt(this.scene.position);
  this.floorAndSky();
  this.loadTank();
  this.setLights();
  var axisHelper = new THREE.AxisHelper( 5 );
this.scene.add(axisHelper);
}

Kalero.prototype.loadTank = function(){
  this.tank = new Tank();
  this.tank.setParent(this);
  this.tank.loadModel(this.tank.modelUrl);
  this.tank.init();
}

Kalero.prototype.setLights = function(){
  // now add some better lighting
  var ambientLight = new THREE.AmbientLight(0xF47a42);
  ambientLight.name='ambient';
  this.scene.add(ambientLight);

   //add sunlight (light
  /*var directionalLight = new THREE.DirectionalLight(0xffff55, 1);
  directionalLight.position = new THREE.Vector3(100,10,-50);
  directionalLight.name='directional';
  this.scene.add(directionalLight);*/

  var light = new THREE.PointLight(0xffffff);
  light.position.set(0,250,0);
  this.scene.add(light);

  this.control = new function () {
      this.rotationSpeed = 0.001;
      this.ambientLightColor = ambientLight.color.getHex();
      //this.directionalLightColor = directionalLight.color.getHex();
  };
}

Kalero.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

Kalero.prototype.preRender = function(){
  this.cameraControl.update();
  this.scene.getObjectByName('ambient').color = new THREE.Color(0x111111);
  //this.scene.getObjectByName('directional').color = new THREE.Color(0xffffff);
  if(this.tank.is_running){
      this.tank.muffler.onRender();
  }
}
