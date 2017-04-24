/**
 *  El Aguila piel de berkut ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Condor(){
  this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/Eagle.json";
  this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
  this.game = null;
  this.geometry = null;
  this.mesh = null;
  this.gameIsSet = false;
  this.meshName = "elCondorPasa";
  this.centerMeshName = "";//this. will follow while turning
  this.radiusLength = 250;
  this.altitude = 50;//y
  this.origin = {x:0,y:0,z:0};
  this.angle = 10;
  this.speed = 0.9;
  this.clockWise = true;
  this.modelLoaded = false;
  this.scale = 2;
  eO._3D.Util.AI.Orbitator.call(this.p);
}

Condor.prototype = Object.create(eO._3D.Util.AI.Orbitator.prototype);
Condor.prototype.constructor = Condor;

Condor.prototype.postLoad = function(){
  this.mesh.rotation.y = -90;
}

Condor.prototype.postRender = function(){
  this.mesh.rotation.y = this.mesh.rotation.y - 0.035;
}
