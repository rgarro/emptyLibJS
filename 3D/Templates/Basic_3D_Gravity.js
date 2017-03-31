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
      //this.renderer.shadowMapEnabled = true;
      this.renderer.shadowMapSoft = true;
      this.floorAndSky();
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

  Basic_3D_Gravity.prototype.initScene = function(){
    this.scene = new Physijs.Scene;
		this.scene.setGravity(new THREE.Vector3(0,-30,0));//params for gravity
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

  return Basic_3D_Gravity;
})();
eO._3D.Templates.Basic_3D_Gravity = Basic_3D_Gravity;
