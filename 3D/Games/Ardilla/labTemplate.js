/**
 * replace Ardilla ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Ardilla(){
  this.ini_camera_x = 235;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;

  this.show_stats = true;
  this.show_control_gui = true;
  this.control = null;
  this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/floorb.png';
  this.clearColor = 0xa5b6c5;
  this.l = new Light();

  this.planet = new Wo.Planet();
  this.enable_shadows = true;
  this.Helicoptero = null;
  this.cameraControl = null;
  Game.call(this.p);
}

Ardilla.prototype = Object.create(eO._3D.Templates.Game.prototype);

Ardilla.prototype.constructor = Ardilla;

Ardilla.prototype.postInit = function(){
  this.floorAndSky();
  this.Helicoptero = new Helicoptero();
  this.Helicoptero.setGame(this);
  this.Helicoptero.loadModel(this.Helicoptero.modelUrl);
}

Ardilla.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

Ardilla.prototype.preRender = function(){
  this.cameraControl.update();
//  this.scene.getObjectByName('ambient').color = new THREE.Color(0x111111);
  //this.scene.getObjectByName('directional').color = new THREE.Color(0xffffff);
  this.planet.onRender();

}
