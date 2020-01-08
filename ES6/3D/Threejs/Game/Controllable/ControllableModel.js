class ControllableModel {
  constructor() {
    this.vehicleMeshName = "meshNames";
    this.modelUrl = "/google/model.json";
    this.FbxModelUrl = "/Game/assets/models/SU25/SU-25.fbx";
    this.pixelsPerSecond = 25;
    this.vehicleMesh = null;
    //this.scale = 13;
    //this.Game = null;
    this.vehicleColor = 0x0ffa65;
    this.rotationAngleStep = 6;
    this.group = new THREE.Object3D();
    this.scene = null;
  }

  setScene(sceneObj) {
    this.scene = sceneObj;
  }

  loadFBXModel() {
    var loader = new THREE.FBXLoader(); //new FBXLoader();
    console.log(loader);
    console.log("here we go ...");
    loader.load(
      this.FbxModelUrl,
      function(object3d) {
        console.log("here***");
        this.scene.add(object3d);
      }.bind(this)
    );
  }

  loadModel() {}
}
