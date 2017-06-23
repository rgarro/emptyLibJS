/**
 *  Test point to throw spheres and tweak gravity engine
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
  this.radiusLength = 100;
  this.altitude = 90;//y
  this.origin = {x:0,y:0,z:0};
  this.angle = 30;
  this.speed = 0.9;
  this.clockWise = true;
  this.modelLoaded = false;
  this.scale = 11;
  this.propeller = null;
  this.rudder = null;
  this.dropKey = "y";//testing Wo FallingBouncer
  this.group = new THREE.Object3D();
  this.PropsRemover = null;
  createjs.Sound.registerSound("/mp3/Helicopt-Diode111-8858_hifi.mp3", 'heliSound');
}

Helicoptero.prototype.setGame = function(game){
  this.game = game;
  this.gameIsSet = true;
}

Helicoptero.prototype.constructor = Helicoptero;

Helicoptero.prototype.postLoad = function(){
  var s = createjs.Sound.play('heliSound',{loop:1000});
  s.volume = 0.3;
  this.mesh.rotation.y = -90;
  this.initPropeller();
  this.initRudder();
  if(this.game.enable_shadows){
    this.mesh.castShadow = true;
  }
  this.group.add(this.mesh);
  this.group.add(this.propeller.mesh);
  this.group.add(this.rudder.mesh);
  this.game.scene.add(this.group);
  this.PropsRemover = new eO.Util.PropsRemover(this.game.scene);
  this.initListeners();
}

Helicoptero.prototype.initListeners = function(){
  window.addEventListener("keypress",(function(e){
    this.controlActions(e.key);
  }).bind(this));
  window.addEventListener("keydown",(function(e){
    this.controlActions(e.key);
  }).bind(this));
}

Helicoptero.prototype.controlActions = function(keyCode){
  if(keyCode == this.dropKey || keyCode == this.dropKey.toUpperCase()){

  }
}

Helicoptero.prototype.initRudder = function(){
  this.rudder = new HeliRudder();
  this.rudder.origin.y = this.altitude + 10;
  this.rudder.origin.x = 50;
  this.rudder.origin.z = 28;
  this.rudder.setGame(this.game);
  this.rudder.loadModel("/cube/");
}

Helicoptero.prototype.loadModel = function(modelUrl){
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

Helicoptero.prototype.postLoad = function(){

}

Helicoptero.prototype.initPropeller = function(){
  this.propeller = new HeliPropeller();
  this.propeller.origin.y = this.altitude + 10;
  this.propeller.setGame(this.game);
  this.propeller.loadModel("/cube/");
}


Helicoptero.prototype.postRender = function(){

  this.propeller.onRender();
  this.rudder.onRender(this.mesh.position.x + 50,this.mesh.position.y,this.mesh.position.z + 28);
}
