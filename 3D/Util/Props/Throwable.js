/**
 * a throwing factory of balls ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var Throwable = (function(){

  function Throwable(){
    this.modelUrl = null;
    this.pos = new THREE.Vector3();
    this.quat = new THREE.Quaternion();
    this.distance = 300;
    this.margin = 0.05;
    this.game = null;
  }

  Throwable.prototype.init = function(){
    //Throw event listeners
  }



  Throwable.prototype.doThrow = function(x,y,z){
    // Creates a ball and throws it
        var ballMaterial = new THREE.MeshPhongMaterial({color:0x202020});
				var ballMass = 35;
				var ballRadius = 0.4;
				var ball = new THREE.Mesh(new THREE.SphereGeometry(ballRadius,14,10),ballMaterial);
				ball.castShadow = true;
				ball.receiveShadow = true;
				var ballShape = new Ammo.btSphereShape(ballRadius);
				ballShape.setMargin(this.margin);

				this.pos.copy(new THREE.Vector3(x,y,z));
				this.pos.add(new THREE.Vector3(x,y,z));
				this.quat.set(0,0,0,1);
				var ballBody = this.game.createRigidBody(ball,ballShape,ballMass,this.pos, this.quat);
				this.pos.multiplyScalar(24);
				ballBody.setLinearVelocity(new Ammo.btVector3(this.pos.x+this.distance,this.pos.y+this.distance,this.pos.z+this.distance));
  }

  return Throwable;
})();

eO._3D.Util.Props.Throwable = Throwable;
