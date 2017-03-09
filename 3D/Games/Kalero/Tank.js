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
  this.vehicleColor = 0xD945D9;
  TerrainVehicle.call(this.p);
}

Tank.prototype = Object.create(TerrainVehicle.prototype);
Tank.prototype.constructor = Tank;
