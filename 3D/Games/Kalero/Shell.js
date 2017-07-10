function Shell(x,z,rotationY,gunRotationX){
  this.mesh = null;
  this.geometry = null;
  this.startY = 28;
  this.startX = x;
  this.startZ = z;
  this.gunRotationX = gunRotationX;
  this.startRotationY = rotationY;
  this.planePositionRectifier = new eO._3D.Util.Mechanics.horizontalRectifierOfVerticalTrajectory();
  this.is_trigguered = false;
  this.range = 800;
  this.flyed = 0;
  this.curver = null;
}


Shell.prototype.trigger = function(){
  this.geometry = new THREE.SphereGeometry(3,12,12);
  var material = new THREE.MeshBasicMaterial( {color: 0x2f2f35} );
  //will need turret elevation to init ballistic render
  this.mesh = new THREE.Mesh(this.geometry,material);
  this.planePositionRectifier.setInitPos(this.startX,this.startZ,this.startRotationY);
  this.planePositionRectifier.speed = 16;
  this.mesh.position.x = this.startX;
  this.mesh.position.z = this.startZ;
  this.mesh.position.y = this.startY;
  this.mesh.rotationY = this.startRotationY;
  this.is_trigguered = true;
}

Shell.prototype.fly = function(){
  if(this.flyed < this.range){
    //this.curver.ocurring();
    this.planePositionRectifier.onRender();
    this.mesh.position.x = this.planePositionRectifier.position.x;
    this.mesh.position.z = this.planePositionRectifier.position.z;
    this.mesh.position.y += (this.gunRotationX*Math.sin(this.gunRotationX));
    //this.mesh.position.y += this.curver.physicObject.position.y;
    this.flyed ++;
  }else{
    this.planePositionRectifier.is_moving = false;
    this.is_trigguered = false;
  }
}
