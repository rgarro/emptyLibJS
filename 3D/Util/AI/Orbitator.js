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
    this.altitude = 300;
  }

  Orbitator.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
  }

  Orbitator.prototype.loadModel = function(modelUrl){
    
  }

  return Orbitator;
})();
eO._3D.Util.AI.Orbitator = Orbitator;
