/**
* Will be a falling basketball from the helicopter
*
* @author Rolando <rolando@emptyart.xyz>
*/

function FallingBall(){
  this.mesh = null;

  this.FallingBouncer = new Wo.Mechanics.FallingBouncer();
  this.is_thrown = false;
}

FallingBall.prototype.fall = function(x,y,z){
  var geometry = new THREE.SphereGeometry(3,12,12);
  var material = new THREE.MeshBasicMaterial( {color: 0x2f2f35} );


  this.is_thrown = true;
}

FallingBall.prototype.onFalling = function(){
  if(this.is_thrown){

  }
}
