/**
 * Basic 3D Template with Gravity Options
 *
 * .          .
 *.          .                  .          .              .
 *+.           _____  .        .        + .                    .
 *.   .   ,-~"     "~-.                                +
 *      ,^ ___         ^. +                  .    .       .
 *     / .^   ^.         \         .      _ .
 *    Y  l  o  !          Y  .         __CL\H--.
 *    l_ `.___.'        _,[           L__/_\H' \\--_-          +
 *    |^~"-----------""~ ^|       +    __L_(=): ]-_ _-- -
 *+ . !                   !     .     T__\ /H. //---- -       .
 *.    \                 /               ~^-H--'
 *      ^.             .^            .      "       +.
 *        "-.._____.,-" .                    .
 *+           .                .   +                       .
 *+          .             +                                  .
 *.             .      .
 *
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var Basic_3D_Gravity = (function(){
  function Basic_3D_Gravity(){
    Physijs.scripts.worker = '/libs/physijs_worker.js';
  	Physijs.scripts.ammo = '/libs/ammo.js';
    this.container = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.ini_camera_x = 15;
    this.ini_camera_y = 16;
    this.ini_camera_z =13;
    this.is_camera_set = false;
    this.cameraControl = null;
    this.show_control_gui = false;
    this.show_stats = false;
    this.ds = null;//datastats object
    this.l = new Light();
    this.clearColor = 0xa3e1ff;
    this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/checkerboard.jpg';
    this.ground = null;
    this.xGravity = 0;
    this.yGravity = -30;
    this.zGravity = 0;
    this.rigidBodies = [];
    this.gravityConstant = 7.8;
    this.collisionConfiguration = null;
    this.dispatcher = null;
    this.broadphase = null;
    this.solver = null;
    this.physicsWorld = null;


    if(typeof arguments[0] != 'undefined'){
      this.setContainer(arguments[0]);
    }
  }

  Basic_3D_Gravity.prototype.setContainer = function(containerID){
    if(typeof containerID == 'string'){
      this.container = document.getElementById(containerID);
      if(this.container === null){
        throw new Error("Container doesn exist.");
      }
    }else{
      throw new Error("ContainerID must be a valid String");
    }
  };

  Basic_3D_Gravity.prototype.init = function() {
      if(this.show_stats || this.show_control_gui){
        this.ds = new DataStats();
      }
      this.initScene();
      this.setCamera();
      this.camera.lookAt(this.scene.position);
      this.setControl();
      this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(this.clearColor, 1.0);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;
    this.renderer.shadowMapSoft = true;
      this.floorAndSky();
      this.initPhysics();
      this.postInit();
      this.floorAndSky();
      document.body.appendChild(this.renderer.domElement);
      if(this.show_control_gui){
        control = new function () {
            this.rotationSpeed = 0.001;
        };
        this.ds.addControlGui(control);
      }
      if(this.show_stats){
        this.ds.addStatsObject();
      }
      this.setLights();
      this.render();
  }

  Basic_3D_Gravity.prototype.initPhysics = function(){
    this.gravityConstant = 7.8;
    this.collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    this.dispatcher = new Ammo.btCollisionDispatcher(this.collisionConfiguration);
    this.broadphase = new Ammo.btDbvtBroadphase();
    this.solver = new Ammo.btSequentialImpulseConstraintSolver();
    this.physicsWorld = new Ammo.btDiscreteDynamicsWorld(this.dispatcher,this.broadphase,this.solver,this.collisionConfiguration);
    this.physicsWorld.setGravity( new Ammo.btVector3( 0, - this.gravityConstant, 0 ) );
  }

  Basic_3D_Gravity.prototype.initScene = function(){
    this.scene = new Physijs.Scene;
		this.scene.setGravity(new THREE.Vector3(this.xGravity,this.yGravity,this.zGravity));//params for gravity
  }

  Basic_3D_Gravity.prototype.floorAndSky = function(){
    var floorTexture = new THREE.ImageUtils.loadTexture(this.floorTextureUrl);
  	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  	floorTexture.repeat.set( 10, 10 );
  	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
    var ground_material = Physijs.createMaterial(floorMaterial,.8,.4);
		ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
		ground_material.map.repeat.set( 3, 3 );
		var ground_geometry = new THREE.PlaneGeometry(1000,1000,10,10);
		for ( var i = 0; i < ground_geometry.vertices.length; i++ ) {
			var vertex = ground_geometry.vertices[i];
		}
		ground_geometry.computeFaceNormals();
		ground_geometry.computeVertexNormals();
		this.ground = new Physijs.HeightfieldMesh(ground_geometry,ground_material,0);
    this.ground.name = "floor";
    this.ground.position.y = -0.5;
    //this.ground.rotation.x = Math.PI / 2;
		this.ground.rotation.x = -Math.PI / 2;
		this.ground.receiveShadow = true;
		this.scene.add(this.ground);
  }

  Basic_3D_Gravity.prototype.setLights = function(){

  }

  Basic_3D_Gravity.prototype.setCamera = function(){
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.x = this.ini_camera_x;
    this.camera.position.y = this.ini_camera_y;
    this.camera.position.z = this.ini_camera_z;
    this.is_camera_set = true;
  }

  Basic_3D_Gravity.prototype.setControl = function(){

  }

  Basic_3D_Gravity.prototype.postInit = function(){

  }

  Basic_3D_Gravity.prototype.preRender = function(){

  }

  Basic_3D_Gravity.prototype.render = function(){
    this.preRender();
    this.scene.simulate();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame((function(){this.render();}).bind(this));
  }

  Basic_3D_Gravity.prototype.handleResize = function() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  Basic_3D_Gravity.prototype.createRigidBody = function(object,physicsShape,mass,pos,quat,vel,angVel){
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
			this.scene.add( object );
			if ( mass > 0 ) {
				this.rigidBodies.push( object );
				// Disable deactivation
				body.setActivationState( 4 );
			}
			this.physicsWorld.addRigidBody( body );
			return body;
		}

  return Basic_3D_Gravity;
})();
eO._3D.Templates.Basic_3D_Gravity = Basic_3D_Gravity;
