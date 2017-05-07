function D5tGun(){
  this.mesh = null;
  this.game = null;
  this.gameIsSet = false;
  this.color = 0xFF8B53;
  this.geometry = null;
  this.upElevKey = "z";
  this.downElevKey = "x";
  this.clockWise = true;
  this.elevStep = 3;
  this.lastRotation = 0;
  this.minElevationStep = -2;
  this.maxElevationStep = 21;
}

D5tGun.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
}

D5tGun.prototype.loadModel = function(x,y,z,rotationY){
  if(this.gameIsSet){
    var material = new THREE.MeshBasicMaterial({color:this.color});
    //material.color.set(this.color);
    this.geometry = new THREE.BoxGeometry(2,2,60);
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

D5tGun.prototype.initListeners = function(){
  window.addEventListener("keypress",(function(e){
    this.controlActions(e.key);
  }).bind(this));
  window.addEventListener("keydown",(function(e){
    this.controlActions(e.key);
  }).bind(this));
}

D5tGun.prototype.controlActions = function(keyCode){
  var willRotate = false;
  if(keyCode == this.upElevKey || keyCode == this.upElevKey.toUpperCase()){
    if(this.mesh.rotation.x < this.maxElevationStep){
      willRotate = true;
    }
    this.clockWise = true;
  }
  if(keyCode == this.downElevKey || keyCode == this.downElevKey.toUpperCase()){
    if(this.mesh.rotation.x > this.minElevationStep){
    willRotate = true;
  }
    this.clockWise = false;
  }
  if(willRotate){
    this.mesh.rotation.x = (this.clockWise ? this.mesh.rotation.x + this.elevStep : this.mesh.rotation.x - this.elevStep);

  }
}

D5tGun.prototype.onRender = function(x,y,z,rotationZ,rotationY){//let it go with the group
  /*if(this.gameIsSet){
    //var delta = this.clock.getDelta();
    this.mesh.position.x = x;
    this.mesh.position.y = y;
    this.mesh.position.z = z;
    this.mesh.rotation.y = rotationY;
    this.mesh.matrixAutoUpdate = true;
    //this.mesh.rotation.x = this.lastRotation;
//console.log(rotationY);
  //this.mesh.rotation.z = rotationZ;
  }else{
    throw new Error("Needs a Game object");
  }*/
}
