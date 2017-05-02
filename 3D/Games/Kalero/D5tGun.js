function D5tGun(){
  this.mesh = null;
  this.game = null;
  this.gameIsSet = false;
  this.color = 0x000000;
  this.geometry = null;
}

D5tGun.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
}

D5tGun.prototype.loadModel = function(x,y,z,rotationY){
  if(this.gameIsSet){
    var material = new THREE.MeshBasicMaterial({color:this.color});
    //material.color.set(this.color);
    this.geometry = new THREE.BoxGeometry(3,15,3);
    this.mesh = new THREE.Mesh(this.geometry,material);
    this.mesh.name = this.meshName;
    this.mesh.position.x = x;
    this.mesh.position.y = y;
    this.mesh.position.z = z;
    this.mesh.rotation.y = rotationY;
    this.game.scene.add(this.mesh);
  }else{
    throw new Error("Needs a Game object");
  }
}

D5tGun.prototype.onRender = function(x,y,z,rotationY){
  if(this.gameIsSet){
    this.mesh.position.x = x;
    this.mesh.position.y = y;
    this.mesh.position.z = z;
    this.mesh.rotation.y = rotationY;
  }else{
    throw new Error("Needs a Game object");
  }
}
