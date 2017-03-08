function Tank(){
  this.parent = null;
  this.vehicleMeshName = "elTanque";
  this.pixelsPerSecond = 5;
  TerrainVehicle.call(this.p);
}

Tank.prototype = Object.create(TerrainVehicle.prototype);
Tank.prototype.constructor = Tank;
