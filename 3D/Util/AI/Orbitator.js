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
    this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
    this.game = null;
    this.geometry = null;
    this.mesh = null;
    this.gameIsSet = false;
    this.meshName = "";
    this.centerMeshName = "";
    this.radiusLength = 300;
    this.altitude = 300;//y
    this.origin = {x:0,y:0,z:0};
    this.angle = 45;
    this.speed = 3;
    this.clockWise = true;
    this.modelLoaded = false;
    this.scale = 2;
  }

  Orbitator.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
  }

  Orbitator.prototype.loadModel = function(modelUrl){
    var loader = new THREE.JSONLoader();
    loader.load(modelUrl,(function(model,materials){
      var texture = new THREE.TextureLoader().load(this.textureUrl);
      var material = new THREE.MeshBasicMaterial({map:texture});
      this.mesh = new THREE.Mesh(model, material);
      this.mesh.name = this.meshName;
      this.mesh.scale.set(this.scale,this.scale,this.scale);
      this.mesh.position.y = this.altitude;
      this.game.scene.add(this.mesh);
      this.modelLoaded = true;
      this.postLoad();
    }).bind(this));
  }

  Orbitator.prototype.postLoad = function(){

  }

  Orbitator.prototype.postRender = function(){

  }

  Orbitator.prototype.onRender = function(){
    if(this.modelLoaded){
      var rad =  this.angle * (Math.PI/180);
      this.mesh.position.x = this.origin.x + this.radiusLength * Math.cos(rad);
      this.mesh.position.z = this.origin.z + this.radiusLength * Math.sin(rad);
      this.angle = (this.clockWise ? this.angle + this.speed : this.angle - this.speed);
      this.postRender();
    }
  }

  return Orbitator;
})();
eO._3D.Util.AI.Orbitator = Orbitator;
