/**
 *       _..--=--..._
 *    .-'            '-.  .-.
 *   /.'              '.\/  /
 *  |=-                -=| (
 *   \'.              .'/\  \
 *    '-.,_____ _____.-'  '-'
 *        [_____]=8
 *
 * Orbiting asset
 * @author Rolando <rolando@emptyart.xyz>
 */
var Orbitator = (function(){

  function Orbitator(){
    this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
    this.game = null;
    this.geometry = null;
    this.mesh = null;
    this.gameIsSet = false;
    this.meshName = "";
    this.centerMeshName = "";
    this.radiusLength = 300;
    this.altitude = 300;//y
    this.origin = {x:0,y:0,z:0};
    this.angle = 0;
    this.speed = 3;
    this.clockWise = true;
  }

  Orbitator.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
  }

  Orbitator.prototype.loadModel = function(modelUrl){

  }

  Orbitator.prototype.onRender = function(){
    var rad =  this.angle * (Math.PI/180);
    this.mesh.x = this.mesh.x + this.radiusLength * Math.cos(rad);
    this.mesh.z = this.mesh.z + this.radiusLength * Math.sin(rad);
    this.angle = (this.clockWise ? this.angle + this.speed : this.angle - this.speed);
  }

  return Orbitator;
})();
eO._3D.Util.AI.Orbitator = Orbitator;
