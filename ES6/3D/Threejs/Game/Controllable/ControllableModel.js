class ControllableModel {
  constructor() {
    this.vehicleMeshName = "meshNames";
    this.modelUrl = "/google/model.json";
    this.FbxModelUrl = "/Game/assets/models/SU25/SU-25.fbx";
    this.pixelsPerSecond = 25;
    this.vehicleMesh = null;
    this.textureUrl = "/Game/assets/models/Mi28NA.png";
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
    console.log("Polinaris Presidente ...");
    console.log(this.FbxModelUrl);
    loader.load(
      this.FbxModelUrl,
      function(object3d) {
        console.log("here***");
        this.scene.add(object3d);
      }.bind(this)
    );
  }

  loadModel() {
    var loader = new THREE.JSONLoader();
    loader.load(
      this.modelUrl,
      function(model, materials) {
        var texture = new THREE.TextureLoader().load(this.textureUrl);
        var material = new THREE.MeshBasicMaterial({ map: texture });
        this.mesh = new THREE.Mesh(model, material);
        this.mesh.name = this.meshName;
        //this.mesh.scale.set(this.scale, this.scale, this.scale);
        //this.mesh.position.y = this.altitude;
        this.scene.add(this.mesh);
        this.modelLoaded = true;
        this.postLoaded();
      }.bind(this)
    );
  }

  postLoaded() {}
}
