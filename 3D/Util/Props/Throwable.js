/**
 * a monkey throw a stone to a dingo ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var Throwable = (function(){

  function Throwable(){
    this.modelUrl = null;
  }

  Throwable.prototype.doThrow = function(){
    // Creates a ball and throws it
				var ballMass = 35;
				var ballRadius = 0.4;
				var ball = new THREE.Mesh( new THREE.SphereGeometry( ballRadius, 14, 10 ), ballMaterial );
				ball.castShadow = true;
				ball.receiveShadow = true;
				var ballShape = new Ammo.btSphereShape( ballRadius );
				ballShape.setMargin( margin );
				pos.copy( raycaster.ray.direction );
				pos.add( raycaster.ray.origin );
				quat.set( 0, 0, 0, 1 );
				var ballBody = createRigidBody( ball, ballShape, ballMass, pos, quat );
				pos.copy( raycaster.ray.direction );
				pos.multiplyScalar( 24 );
				ballBody.setLinearVelocity( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
  }

  return Throwable;
})();

eO._3D.Util.Props.Throwable = Throwable;
