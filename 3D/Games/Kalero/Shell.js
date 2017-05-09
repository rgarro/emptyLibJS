
function Shell(x,z,rotationX){
  this.mesh = null;
  this.startY = 50;
  this.startX = x;
  this.startZ = z;
  this.startRotationX = rotationX;
  this.planePositionRectifier = new eO._3D.Util.Mechanics.horizontalRectifierOfVerticalTrajectory();
  this.is_trigguered = false;
  this.range = 300;
  this.flyed = 0;
}


Shell.prototype.trigger = function(){
  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  this.mesh = new THREE.Mesh(geometry,material);
  this.planePositionRectifier.setInitPos(this.startX,this.startZ,this.startRotationX);
  this.mesh.position.x = this.planePositionRectifier.position.x;
  this.mesh.position.z = this.planePositionRectifier.position.z;
  this.mesh.position.y = this.startY;
  this.mesh.rotationX = this.startRotationX;
  this.is_trigguered = true;
}

Shell.prototype.fly = function(){
  if(this.flyed < this.range){
    this.planePositionRectifier.onRender();
    this.mesh.position.x = this.planePositionRectifier.position.x;
    this.mesh.position.z = this.planePositionRectifier.position.z;
    this.flyed ++;
  }else{
    this.planePositionRectifier.is_moving = false;
    this.is_trigguered = false;
  }
}
