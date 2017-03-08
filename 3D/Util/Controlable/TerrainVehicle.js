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
}


TerrainVehicle.prototype.setParent = function(game){
  this.parent = game;
  this.isParentSet = true;
}

TerrainVehicle.prototype.preInit = function(){

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
      p.vehicleMesh.name = "vehicle";
      //mesh.translateY(-0.5);
      //mesh.scale = new THREE.Vector3(3,3,3);
      p.parent.scene.add(p.vehicleMesh);
    });
  }else{
    throw new Error("Needs a Game parent object");
  }
}

TerrainVehicle.prototype.initListeners = function(){

}

TerrainVehicle.prototype.init = function(){

}
