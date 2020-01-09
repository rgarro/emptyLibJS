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
    //var loader = new THREE.JSONLoader();
    var loader = new THREE.ObjectLoader();
    console.log(this.modelUrl);
    console.log(this.scene);
    console.log(loader);
    console.log("Polinaris Presidente xxxy");
    loader.load(
      this.modelUrl,
      function(model, materials) {
        var material = new THREE.MeshPhongMaterial();
        //var material = new THREE.MeshBasicMaterial();
        material.color.set(this.vehicleColor);
        this.vehicleMesh = new THREE.Mesh(model, material);
        this.vehicleMesh.name = this.vehicleMeshName;
        //this.vehicleMesh.scale.set(this.scale, this.scale, this.scale);
        this.scene.add(this.vehicleMesh);
        //this.vehicleMesh.rotation.y = -360;
        this.postLoaded();
      }.bind(this)
    );
  }

  postLoaded() {}
}
