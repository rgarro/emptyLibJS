/**
 *  mario sotela tenia un helicoptero para ir a surfear ...
 * "liberen a los esclavos", decian los grafitis en los 80's,
 * en aquel pais tercermundista donde practican el secuestro transexual.
 * muchos huetares de toyopan renunciaron a ser esclavos de creer a los hombres , mujer.
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
  this.centerMeshName = "elTanque";
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
  this.group = new THREE.Object3D();
  createjs.Sound.registerSound("/mp3/Helicopt-Diode111-8858_hifi.mp3", 'heliSound');
  //eO._3D.Util.AI.Orbitator.call(this.p);
  eO._3D.Util.AI.FollowAndSurround.call(this.p);
}

//Helicoptero.prototype = Object.create(eO._3D.Util.AI.Orbitator.prototype);
Helicoptero.prototype = Object.create(eO._3D.Util.AI.FollowAndSurround.prototype);
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
}

Helicoptero.prototype.initRudder = function(){
  this.rudder = new HeliRudder();
  this.rudder.origin.y = this.altitude + 10;
  this.rudder.origin.x = 50;
  this.rudder.origin.z = 28;
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
  this.propeller.mesh.position.x = this.mesh.position.x;
  this.propeller.mesh.position.z = this.mesh.position.z;
  this.propeller.mesh.position.x = this.mesh.position.x;
  this.group.position.z = this.mesh.position.z;
  this.group.position.x = this.mesh.position.x;
  this.group.position.y = this.mesh.position.y;
  this.propeller.onRender();
  this.rudder.onRender(this.mesh.position.x + 50,this.mesh.position.y,this.mesh.position.z + 28);
}
