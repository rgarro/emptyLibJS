/**
 * Green Tank over Kalero stepe ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 *
 * @requires emptyLibJS/3D/Util/Controlable/TerrainVehicle.js
 */
function Tank(){
  this.parent = null;
  this.vehicleMeshName = "elTanque";
  //this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/T_34_85.json";
  this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/T43B.json";//custom blended howitzer styled turret
  this.Gun = new D5tGun();
  this.pixelsPerSecond = 25;
  this.vehicleMesh = null;
  this.scale = 13;
  this.vehicleColor = 0x0FFA65;
  this.rotationAngleStep = 6;
  this.moveForwardKey = "w";
  this.moveBackwardKey = "s";
  this.turnLeftKey = "a";
  this.turnRightKey = "d";
  this.displaceRightKey = "q";
  this.displaceLeftKey = "e";
  this.tracks = [];
  this.propsRemover = null;
  this.group = new THREE.Object3D();
  TerrainVehicle.call(this.p);
  this.tools = new eO.Util._3DTools();
  this.muffler = null;
  this.is_running = false;
}

Tank.prototype = Object.create(eO.Util.Controlable.TerrainVehicle.prototype);
Tank.prototype.constructor = Tank;

Tank.prototype.preInit = function(){
  createjs.Sound.registerSound("/mp3/rolling_-ryan_pud-8115_hifi.mp3", 'fwdSound');
  createjs.Sound.registerSound("/mp3/spaz_scr-Jerimee_-7440_hifi.mp3", 'turnSound');
}

Tank.prototype.postInit = function(){
  this.propsRemover = new eO.Util.PropsRemover(this.parent.scene);
  this.muffler = new eO.Util.Props.SmokeEmitter(this.parent.scene);
}

Tank.prototype.initGun = function(){
  this.Gun.setGame(this.parent);
  this.Gun.loadModel(0,28,0,0);
  this.group.add(this.vehicleMesh);
  this.group.add(this.Gun.mesh);
  this.parent.scene.add(this.group);
  this.Gun.initListeners();
}

Tank.prototype.beforeForward = function(){
  this.playEngine();
  this.drawTrack('forward');
  this.is_running = true;
}

Tank.prototype.playEngine = function(){
  var s = createjs.Sound.play('fwdSound');
  s.volume = 0.04;
}

Tank.prototype.beforeBackward = function(){
  this.playEngine();
  this.drawTrack('backward');
  this.is_running = true;
}

Tank.prototype.beforeTurn = function(){
  var s = createjs.Sound.play('turnSound');
  s.volume = 0.04;
  this.drawTrack('backward');
  this.is_running = true;
}

Tank.prototype.drawTrack = function(trackDirection){
  this.parent.scene.updateMatrixWorld(true);
  var m = this.tools.getMeshBoxedDimentions(this.vehicleMesh,this.scale);
  this.muffler.density = 12;//pase riteve
  this.muffler.smokeX = m.x;
  this.muffler.smokeY = m.y;
  this.muffler.smokeZ = m.z - 50;
  this.muffler.doSmoke();
  var track = new Tracks(m.width,m.height,m.x,m.y,m.z,m.rotationY,m.rotationX);
  track.propsRemover = this.propsRemover;
  track.propMeshName = "track" + this.tracks.length;
  track.index = this.tracks.length;
  this.parent.scene.add(track.mesh);
  track.propArray = this.tracks;
  track.doTimedFade();
  this.tracks.push(track);
}
