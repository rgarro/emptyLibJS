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

  this.l = new Light();
  Game.call(this.p);
}

Kalero.prototype = Object.create(Game.prototype);

Kalero.prototype.constructor = Kalero;

Kalero.prototype.postInit = function(){
  var p = this;
  var loader = new THREE.JSONLoader();
  loader.load("/emptyLibJS/3D/Games/Kalero/assets/Tank_T_72.json",function(model){
    var material = new THREE.MeshNormalMaterial();
    var mesh = new THREE.Mesh(model,material);
    p.scene.add(mesh);
  });
}

Kalero.prototype.setLights = function(){
  // now add some better lighting
  var ambientLight = this.l.getAmbient(0x9d2020,'ambient');
  this.scene.add(ambientLight);
  // add sunlight light
  var directionalLight = this.l.getDirectional(0xffffff,'directional',new THREE.Vector3(100,10,-50));
  this.scene.add(directionalLight);
}

Kalero.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

Kalero.prototype.preRender = function(){
  this.cameraControl.update();
}
