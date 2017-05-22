/**
* Will be a falling basketball from the helicopter
*
* @author Rolando <rolando@emptyart.xyz>
*/

function FallingBall(){
  this.mesh = null;
  this.FallingBouncer = new Wo.Mechanics.FallingBouncer();
  this.is_thrown = false;
  this.nba_orange = 0xb15d27;
}

FallingBall.prototype.drop = function(x,y,z){
  var geometry = new THREE.SphereGeometry(3,12,12);
  var material = new THREE.MeshBasicMaterial({color:this.nba_orange});
  this.mesh = new THREE.Mesh(geometry,material);
  this.mesh.position.x = x;
  this.mesh.position.z = z;
  this.mesh.position.y = y;
}

FallingBall.prototype.fall = function(){
  if(this.is_thrown){
    this.FallingBouncer.ocurring();
    this.mesh.position.x = this.FallingBouncer.physicObject.position.x;
    this.mesh.position.z = this.FallingBouncer.physicObject.position.z;
    this.mesh.position.y = this.FallingBouncer.physicObject.position.y;
  }
}
