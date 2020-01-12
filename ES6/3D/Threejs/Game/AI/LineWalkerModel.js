class LineWalkerModel {
  constructor() {
    this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
    this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
    this.game = null;
    this.geometry = null;
    this.mesh = null;
    this.gameIsSet = false;
    this.meshName = "helicopteroBody";
    this.centerMeshName = "elTanque";
    this.radiusLength = 100;
    this.altitude = 90; //y
    this.origin = { x: 0, y: 0, z: 0 };
    this.angle = 30;
    this.speed = 0.9;
    this.clockWise = true;
    this.modelLoaded = false;
    this.scale = 11;
    this.propeller = null;
    this.rudder = null;
    this.dropKey = "y"; //testing Wo FallingBouncer
    this.group = new THREE.Object3D();
    this.ball_fell = false;
    this.balls = [];
    this.PropsRemover = null;
  }

  init() {}

  loadModel() {}
}
