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
  eO._3D.Util.AI.Orbitator.call(this.p);
}

Helicoptero.prototype = Object.create(eO._3D.Util.AI.Orbitator.prototype);
Helicoptero.prototype.constructor = Helicoptero;

Helicoptero.prototype.postLoad = function(){
  this.mesh.rotation.y = -90;
}

Helicoptero.prototype.initPropeller = function(){
  this.propeller = new HeliPropeller();
}

Helicoptero.prototype.postRender = function(){
  this.mesh.rotation.y = this.mesh.rotation.y - 0.05;
}
