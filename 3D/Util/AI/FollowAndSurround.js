/**
 *
 *             *       +
 *       '                  |
 *   ()    .-.,="``"=.    - o -
 *         '=/_       \     |
 *      *   |  '=._    |
 *           \     `=./`,        '
 *        .   '=.__.=' `='      *
 *+                         +
 *    O      *        '       .
 *
 * will follow and surround correnting center from followedObject
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var FollowAndSurrownd = (function(){

  function FollowAndSurrownd(){
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

  FollowAndSurrownd.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
  }

  FollowAndSurrownd.prototype.loadModel = function(modelUrl){
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

  FollowAndSurrownd.prototype.postLoad = function(){

  }

  FollowAndSurrownd.prototype.postRender = function(){

  }

  FollowAndSurrownd.prototype.correctCenter = function(){
    //trailerpark Bubbles explained me the physics of a bell among other math stuff
    var bubblesGoKart = this.game.scene.getObjectByName(this.centerMeshName);
    this.origin.x = bubblesGoKart.position.x;
    this.origin.z = bubblesGoKart.position.z;
  }

  FollowAndSurrownd.prototype.onRender = function(){
    if(this.modelLoaded){
      this.correctCenter();
      var rad =  this.angle * (Math.PI/180);
      this.mesh.position.x = this.origin.x + this.radiusLength * Math.cos(rad);
      this.mesh.position.z = this.origin.z + this.radiusLength * Math.sin(rad);
      this.angle = (this.clockWise ? this.angle + this.speed : this.angle - this.speed);
      this.postRender();
    }
  }

  return FollowAndSurrownd;
})();
eO._3D.Util.AI.FollowAndSurrownd = FollowAndSurrownd;
