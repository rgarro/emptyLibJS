function Tank(){
  this.parent = null;
  this.vehicleMeshName = "elTanque";
  this.pixelsPerSecond = 25;
  this.vehicleMesh = null;
  this.scale = 13;
  this.vehicleColor = 0xFFFFFF;
  TerrainVehicle.call(this.p);
}

Tank.prototype = Object.create(TerrainVehicle.prototype);
Tank.prototype.constructor = Tank;
