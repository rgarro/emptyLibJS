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
  TerrainVehicle.call(this.p);
}

Tank.prototype = Object.create(TerrainVehicle.prototype);
Tank.prototype.constructor = Tank;

Tank.prototype.beforeForward = function(){
  //play Diesel engine sound here
}
