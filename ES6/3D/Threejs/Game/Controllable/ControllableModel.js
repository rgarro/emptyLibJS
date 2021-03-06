/**
 * A model with controll setters
 *
 */
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
    this.scale = null;
    this.altitude = 0;
    this.ini_x = 0;
    this.modelColor = 0x8fc965;
    //this.ini_y = 150;
    this.ini_z = 0;
    this.gameIsSet = false;
    this.is_textured_material = false;
    this.controll = null;
  }

  setHelicopterControll(){
    this.controll = new HelicopterController();
  }

  setScene(sceneObj) {
    this.scene = sceneObj;
  }

  setGame(game) {
    this.game = game;
    this.gameIsSet = true;
  }

  loadFBXModel() {

  }

  loadObjModel() {
    var loader = new THREE.ObjectLoader();
    loader.load(
      this.modelUrl,
      function(obj) {
        console.log("loading objet ..");
        this.scene.add(obj);
      }.bind(this)
    );
  }

  loadModel() {
    var loader = new THREE.JSONLoader();
    loader.load(
      this.modelUrl,
      function(model, materials) {
        if(this.is_textured_material){
          var texture = new THREE.TextureLoader().load(this.textureUrl);
          var material = new THREE.MeshBasicMaterial({ map: texture });
        }else{
          var material = new THREE.MeshBasicMaterial({
            color: this.modelColor,
            side: THREE.DoubleSide
          });
        }
        this.mesh = new THREE.Mesh(model, material);
        this.mesh.name = this.meshName;
        this.modelLoaded = true;
        this.postLoaded();
      }.bind(this)
    );
  }

  postLoaded() {}

  onRender(){
    this.postRender();
  }

  postRender(){

  }
}
