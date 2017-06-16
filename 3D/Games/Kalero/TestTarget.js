//High Plains Drifts ... the good citizens of Lago slashed Bubbles and cut his balls in 1877...
function TestTarget(){
  this.trailerModelURL = "/emptyLibJS/3D/Games/Kalero/assets/container/container.json";
  this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/container/container_diffuse03.jpeg";
  this.mesh = null;
  this.meshName = "testTarget";
  this.geometry = null;
  this.material = null;
  this.modelLoaded = false;
  this.game = null;
  this.gameIsSet = false;
  this.scale = 30;
}

TestTarget.prototype.setGame = function(game){
  this.game = game;
  this.gameIsSet = true;
}

TestTarget.prototype.loadModel = function(modelUrl){
  if(this.gameIsSet){
    var loader = new THREE.JSONLoader();
    loader.load(modelUrl,(function(model,materials){
      var texture = new THREE.TextureLoader().load(this.textureUrl);
      this.material = new THREE.MeshBasicMaterial({map:texture});
      this.geometry = model;
      this.mesh = new THREE.Mesh(this.geometry,this.material);
      this.mesh.name = this.meshName;
      this.mesh.scale.set(this.scale,this.scale,this.scale);
      this.mesh.position.y = 15;
      this.mesh.position.x = 200;
      this.mesh.position.z = 200;
      this.game.scene.add(this.mesh);
      this.modelLoaded = true;
    }).bind(this));
  }else{
    throw new Error("Must set game.");
  }
}

TestTarget.prototype.triggerExplotion = function(){
  console.log("Cafetalito Town Hit ...");
}

TestTarget.prototype.checkCollition = function(meshO){
  var originPoint = this.mesh.position.clone();
  for (var vertexIndex = 0; vertexIndex < meshO.geometry.vertices.length; vertexIndex++)
	{
		var localVertex = meshO.geometry.vertices[vertexIndex].clone();
		var globalVertex = localVertex.applyMatrix4(meshO.matrix);
		var directionVector = globalVertex.sub(meshO.position);

		var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize() );
		var collisionResults = ray.intersectObject(meshO);
//console.log(collisionResults);
		if(collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()){
      this.triggerExplotion();
    }
	}
}

TestTarget.prototype.onRender = function(){
  for(var i=0;i<this.game.tank.Gun.flyingShells.length;i++){
    var shell = this.game.tank.Gun.flyingShells[i];
    this.checkCollition(shell.mesh);
  }

}
