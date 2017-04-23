/**
 * Going circles ..
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Helicoptero(){
  this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
  this.game = null;
  this.geometry = null;
  this.mesh = null;
  this.gameIsSet = false;
  this.meshName = "helicoptero";
  this.centerMeshName = "";
  this.radiusLength = 8;
  this.altitude = 70;//y
  this.origin = {x:0,y:0,z:0};
  this.angle = 10;
  this.speed = 0.5;
  this.clockWise = true;
  this.modelLoaded = false;
  this.scale = 13;
  eO._3D.Util.AI.Orbitator.call(this.p);
}

Helicoptero.prototype = Object.create(eO._3D.Util.AI.Orbitator.prototype);
Helicoptero.prototype.constructor = Helicoptero;
