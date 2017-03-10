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
  this.scale = 2;
  this.vehicleColor = 0xFFFFFF;
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
    loader.load(modelUrl,(function(model,materials){
      var material = new THREE.MeshPhongMaterial();
      //var material = new THREE.MeshBasicMaterial();
      material.color.set(this.vehicleColor);
      this.vehicleMesh = new THREE.Mesh(model,material);
      this.vehicleMesh.name = this.vehicleMeshName;
      this.vehicleMesh.scale.set(this.scale,this.scale,this.scale);
      this.parent.scene.add(this.vehicleMesh);
      //this.vehicleMesh.rotation.y = -360;
    }).bind(this));
  }else{
    throw new Error("Needs a Game parent object");
  }
}

TerrainVehicle.prototype.initListeners = function(){
  this.clock = new THREE.Clock();
  window.addEventListener("keypress",(function(e){
    this.controlActions(e.key);
  }).bind(this));
}

TerrainVehicle.prototype.init = function(){
  this.preInit();
  this.initListeners();
  this.postInit();
}

TerrainVehicle.prototype.beforeForward = function(){

}

TerrainVehicle.prototype.controlActions = function(keyCode){
  var delta = this.clock.getDelta(); // seconds.
  var moveDistance = this.pixelsPerSecond * delta; // 200 pixels per second
  var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
  var rot = false;
  var rg = null;
  // move forwards/backwards/left/right
	if(keyCode == "w" || keyCode == "W"){
    this.beforeForward();
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
  // rotate left/right/up/down
	var rotation_matrix = new THREE.Matrix4().identity();
  if(keyCode == "a" || keyCode == "A"){
    rotation_matrix = new THREE.Matrix4().makeRotationY(rotateAngle);
    rot = true;
    rg = rotateAngle;
  }
  if(keyCode == "d" || keyCode == "D"){
    rotation_matrix = new THREE.Matrix4().makeRotationY(-rotateAngle);
    rot = true;
    rg = -rotateAngle;
  }
	if(keyCode == "r" || keyCode == "R"){
    rotation_matrix = new THREE.Matrix4().makeRotationX(rotateAngle);
  }

	if (keyCode == "f" || keyCode == "F"){
    rotation_matrix = new THREE.Matrix4().makeRotationX(-rotateAngle);

  }
  if(rot){
    this.vehicleMesh.matrix.multiply(rotation_matrix);
    this.vehicleMesh.rotation.y = rg;
		//this.vehicleMesh.rotation.setEulerFromRotationMatrix(this.vehicleMesh.matrix);
  }

}
