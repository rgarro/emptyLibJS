/**
 * Movable controlable parent terrain vehicle object
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function TerrainVehicle(){
  this.parent = null;
  this.geometry = null;
  this.vehicleMesh = null;
  this.isParentSet = false;
  this.vehicleMeshName = "terrainVehicle";
  this.pixelsPerSecond = 20;
  this.clock = new THREE.Clock();
}


TerrainVehicle.prototype.setParent = function(game){
  this.parent = game;
  this.isParentSet = true;
}

TerrainVehicle.prototype.preInit = function(){

}

TerrainVehicle.prototype.postInit = function(){

}

TerrainVehicle.prototype.loadModel = function(modelUrl){
  if(this.isParentSet){
    var loader = new THREE.JSONLoader();
    var p = this;
    loader.load(modelUrl,function(model,materials){
      var material = new THREE.MeshPhongMaterial();
      //var material = new THREE.MultiMaterial(materials);
      //material.color = 0xF47a42;
      p.vehicleMesh = new THREE.Mesh(model,material);
      p.vehicleMesh.name = this.vehicleMeshName;
      //p.vehicleMesh.translateY(-0.5);
      //p.vehicleMesh.scale = new THREE.Vector3(5,5,5);
      p.parent.scene.add(p.vehicleMesh);
    });
  }else{
    throw new Error("Needs a Game parent object");
  }
}

TerrainVehicle.prototype.initListeners = function(){
  this.clock = new THREE.Clock();
  var p = this;
  window.addEventListener("keypress",function(e){
    p.controlActions(e.key);
  });
}

TerrainVehicle.prototype.init = function(){
  this.preInit();
  this.initListeners();
  this.postInit();
}

TerrainVehicle.prototype.controlActions = function(keyCode){
console.log(keyCode);
console.log(this.vehicleMeshName);
  var delta = this.clock.getDelta(); // seconds.
  var moveDistance = this.pixelsPerSecond * delta; // 200 pixels per second
  var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second

  // move forwards/backwards/left/right
	if(keyCode == "w" || keyCode == "W"){
    this.vehicleMesh.translateZ(-moveDistance);
  }
	if(keyCode == "s" || keyCode == "S"){
		this.vehicleMesh.translateZ(moveDistance);
  }
	if(keyCode == "q" || keyCode == "Q"){
		this.vehicleMesh.translateX(-moveDistance);
  }
	if (keyCode == "e" || keyCode == "E"){
		this.vehicleMesh.translateX(moveDistance);
  }
}
