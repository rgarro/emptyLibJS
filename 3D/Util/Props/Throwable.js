/**
 * a monkey throw a stone to a dingo ...
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
    this.rigidBodies = [];
    //this.coulbe paramed
    var gravityConstant = 7.8;
    var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    var dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
    var broadphase = new Ammo.btDbvtBroadphase();
    var solver = new Ammo.btSequentialImpulseConstraintSolver();

    this.physicsWorld = new Ammo.btDiscreteDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration );
		this.physicsWorld.setGravity( new Ammo.btVector3( 0, - gravityConstant, 0 ) );
  }

  Throwable.prototype.init = function(){
    //Throw event listeners
  }

  Throwable.prototype.createRigidBody = function(object,physicsShape,mass,pos,quat,vel,angVel){
			if ( pos ) {
			    object.position.copy( pos );
			}
			else {
			    pos = object.position;
			}
			if ( quat ) {
			    object.quaternion.copy( quat );
			}
			else {
			    quat = object.quaternion;
			}
			var transform = new Ammo.btTransform();
			transform.setIdentity();
			transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
			transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
			var motionState = new Ammo.btDefaultMotionState( transform );
			var localInertia = new Ammo.btVector3( 0, 0, 0 );
			physicsShape.calculateLocalInertia( mass, localInertia );
			var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );
			var body = new Ammo.btRigidBody( rbInfo );
			body.setFriction( 0.5 );
			if ( vel ) {
			    body.setLinearVelocity( new Ammo.btVector3( vel.x, vel.y, vel.z ) );
			}
			if ( angVel ) {
			    body.setAngularVelocity( new Ammo.btVector3( angVel.x, angVel.y, angVel.z ) );
			}
			object.userData.physicsBody = body;
			object.userData.collided = false;
			scene.add( object );
			if ( mass > 0 ) {
				this.rigidBodies.push( object );
				// Disable deactivation
				body.setActivationState( 4 );
			}
			this.physicsWorld.addRigidBody( body );
			return body;
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
				var ballBody = this.createRigidBody(ball,ballShape,ballMass,this.pos, this.quat);
				this.pos.multiplyScalar(24);
				ballBody.setLinearVelocity(new Ammo.btVector3(this.pos.x+this.distance,this.pos.y+this.distance,this.pos.z+this.distance));
  }

  return Throwable;
})();

eO._3D.Util.Props.Throwable = Throwable;
