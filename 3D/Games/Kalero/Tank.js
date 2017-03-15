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
  this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/T43.json";
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
  TerrainVehicle.call(this.p);
  this.tools = new _3DTools();
}

Tank.prototype = Object.create(TerrainVehicle.prototype);
Tank.prototype.constructor = Tank;

Tank.prototype.preInit = function(){
  createjs.Sound.registerSound("/mp3/rolling_-ryan_pud-8115_hifi.mp3", 'fwdSound');
  createjs.Sound.registerSound("/mp3/spaz_scr-Jerimee_-7440_hifi.mp3", 'turnSound');
}

Tank.prototype.beforeForward = function(){
  this.playEngine();
  this.drawTrack('forward');
}

Tank.prototype.playEngine = function(){
  //play Diesel engine sound here
  var s = createjs.Sound.play('fwdSound');
  s.volume = 0.04;
}

Tank.prototype.beforeBackward = function(){
  this.playEngine();
  this.drawTrack('backward');
}

Tank.prototype.beforeTurn = function(){
  var s = createjs.Sound.play('turnSound');
  s.volume = 0.04;
}

Tank.prototype.drawTrack = function(trackDirection){
  this.parent.scene.updateMatrixWorld(true);
  var m = this.tools.getMeshBoxedDimentions(this.vehicleMesh,this.scale);
//console.log(m);
  var track = new Tracks(m.width,m.height,m.x,m.y,m.rotationY);
  this.parent.scene.add(track.mesh);
  this.tracks.push(track);
}
