//High Plains Drifts ... the good citizens of Lago slashed Bubbles and cut his balls in 1877...
function TestTarget(){
  this.trailerModelURL = "/emptyLibJS/3D/Games/Kalero/assets/container/container.json";
  //this.trailerModelURL = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
  this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/container/container_diffuse03.jpeg";
  this.mesh = null;
  this.meshName = "testTarget";
  this.geometry = "";
  this.material = "";
  this.modelLoaded = false;
  this.game = null;
  this.scale = 30;
}

TestTarget.prototype.loadModel = function(modelUrl){
//  this.mesh = new THREE.Mesh(new THREE.BoxGeometry(30,30,30),new THREE.MeshBasicMaterial({color:0x00ff00}));
  var loader = new THREE.JSONLoader();
  loader.load(modelUrl,(function(model,materials){
    var texture = new THREE.TextureLoader().load(this.textureUrl);
    var material = new THREE.MeshBasicMaterial({map:texture});
    this.mesh = new THREE.Mesh(model, material);
    //this.mesh = new THREE.Mesh(new THREE.BoxGeometry(30,30,30),new THREE.MeshBasicMaterial({color:0x00ff00}));
    this.mesh.name = this.meshName;
    this.mesh.scale.set(this.scale,this.scale,this.scale);
    this.mesh.position.y = 15;
    this.mesh.position.x = 200;
    this.mesh.position.z = 200;
    this.game.scene.add(this.mesh);
    this.modelLoaded = true;
  }).bind(this));
}

TestTarget.prototype.triggerExplotion = function(){

}

TestTarget.prototype.onRender = function(){
  //every target detects it collition
}
