class ControllableModel {
  constructor() {
    this.vehicleMeshName = "meshNames";
    this.modelUrl = "/google/model.json";
    this.pixelsPerSecond = 25;
    this.vehicleMesh = null;
    //this.scale = 13;
    //this.Game = null;
    this.vehicleColor = 0x0ffa65;
    this.rotationAngleStep = 6;
    this.group = new THREE.Object3D();
  }

  //setGame(gameObjs){}
}
