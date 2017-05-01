/**
 *  mario sotela tenia un helicoptero para ir a surfear ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Helicoptero(){
  this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
  this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
  this.game = null;
  this.geometry = null;
  this.mesh = null;
  this.gameIsSet = false;
  this.meshName = "helicopteroBody";
  this.centerMeshName = "";//this. will follow while turning
  this.radiusLength = 250;
  this.altitude = 90;//y
  this.origin = {x:0,y:0,z:0};
  this.angle = 30;
  this.speed = 0.5;
  this.clockWise = true;
  this.modelLoaded = false;
  this.scale = 11;
  this.propeller = null;
  this.rudder = null;
  createjs.Sound.registerSound("/mp3/Helicopt-Diode111-8858_hifi.mp3", 'heliSound');
  eO._3D.Util.AI.Orbitator.call(this.p);
}

Helicoptero.prototype = Object.create(eO._3D.Util.AI.Orbitator.prototype);
Helicoptero.prototype.constructor = Helicoptero;

Helicoptero.prototype.postLoad = function(){
  var s = createjs.Sound.play('heliSound',{loop:1000});
  s.volume = 0.6;// volume has to move from camera radius
  this.mesh.rotation.y = -90;
  this.initPropeller();
  this.initRudder();
}

Helicoptero.prototype.initRudder = function(){
  this.rudder = new HeliRudder();
  this.rudder.origin.y = this.altitude + 10;
  this.rudder.origin.x = this.altitude + 10;
  this.rudder.setGame(this.game);
  this.rudder.loadModel("/cube/");
}

Helicoptero.prototype.initPropeller = function(){
  this.propeller = new HeliPropeller();
  this.propeller.origin.y = this.altitude + 10;
  this.propeller.setGame(this.game);
  this.propeller.loadModel("/cube/");
}

Helicoptero.prototype.postRender = function(){
  this.mesh.rotation.y = this.mesh.rotation.y - 0.05;
  this.propeller.mesh.position.x = this.mesh.position.x;
  this.propeller.mesh.position.z = this.mesh.position.z;
  this.propeller.onRender();
  this.rudder.onRender(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z);
}
