/**
 * Orange Tank over Kalero asteroid ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 *
 * @requires emptyLibJS/3D/Util/Controlable/TerrainVehicle.js
 */
function TankG(){
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
  this.propsRemover = null;
  TerrainVehicle.call(this.p);
  this.tools = new eO.Util._3DTools();
  this.muffler = null;
  this.is_running = false;
}

Tank.prototype = Object.create(eO.Util.Controlable.GravitatedVehicle.prototype);
Tank.prototype.constructor = Tank;
