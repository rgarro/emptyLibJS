/**
 * Carlos Fonseca era un eunuco de los sandinistas ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Kalero(){
  this.ini_camera_x = 35;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;
  this.tank = null;
  this.bgHelicopter = null;
  this.condor = null;
  this.heliFlying = false;
  this.show_stats = true;
  this.show_control_gui = true;
  this.control = null;
  this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/floorb.png';
  this.clearColor = 0xa5b6c5;
  this.l = new Light();
  this.SkyBox = null;
  this.labelMaker = new eO._3D.Util.Screen.InfoLabel(this);
  this.planet = new Wo.Planet();//Wo Hookable Rendered Physics
  this.enable_shadows = true;
  Game.call(this.p);
}

Kalero.prototype = Object.create(eO._3D.Templates.Game.prototype);

Kalero.prototype.constructor = Kalero;

Kalero.prototype.postInit = function(){
  var p = this;
  this.camera.position.set(0,150,400);
  this.camera.lookAt(this.scene.position);
  this.floorAndSky();
  this.loadTank();
  this.loadCondor();
  this.setLights();
  var axisHelper = new THREE.AxisHelper( 5 );
this.scene.add(axisHelper);
}

Kalero.prototype.loadLabels = function(){
  this.labelMaker.add("Kalero",{x:0,y:300,z:0},"kalero");
}

Kalero.prototype.loadCondor = function(){
  this.condor = new Condor();
  this.condor.setGame(this);
  this.condor.loadModel(this.condor.modelUrl);
}

Kalero.prototype.loadHelicopter = function(){

  this.bgHelicopter = new Helicoptero();
  this.bgHelicopter.setGame(this);
  this.bgHelicopter.loadModel(this.bgHelicopter.modelUrl);
//  this.bgHelicopter.init();
  //this.bgHelicopter.mesh.y = 500;
  this.heliFlying = true;
}

Kalero.prototype.loadTank = function(){
  this.tank = new Tank();
  this.tank.setParent(this);
  this.tank.loadModel(this.tank.modelUrl);
  this.tank.init();
  this.tank.initGun();
}

Kalero.prototype.setLights = function(){
  // now add some better lighting
  var ambientLight = new THREE.AmbientLight(0xF47a42);
  ambientLight.name='ambient';
  if(this.enable_shadows){
    //ambientLight.castShadow = true;
//this.scene.add(new THREE.CameraHelper( ambientLight.shadow.camera ));
    //ambientLight.shadowCameraVisible = true;
  }
  this.scene.add(ambientLight);

   //add sunlight (light
  /*var directionalLight = new THREE.DirectionalLight(0xffff55, 1);
  directionalLight.position = new THREE.Vector3(100,10,-50);
  directionalLight.name='directional';
  this.scene.add(directionalLight);*/

  var light = new THREE.PointLight(0xffffff);
  light.position.set(0,250,0);
  /*if(this.enable_shadows){
    light.castShadow = true;
    light.shadow.camera.visible = true;
    light.shadow.camera.right     =  5;
    light.shadow.camera.left     = -5;
    light.shadow.camera.top      =  5;
    light.shadow.camera.bottom   = -5;
  }*/
  this.scene.add(light);

  this.SkyBox = eO._3D.Factories.SkyBoxFactory("images/dawnmountain-",".png",1200);
  this.SkyBox.name = "cielo";
  this.SkyBox.applyMatrix( new THREE.Matrix4().makeScale( 1, 1, - 1 ) );
  this.scene.add(this.SkyBox);

  this.control = new function () {
      this.rotationSpeed = 0.001;
      this.ambientLightColor = ambientLight.color.getHex();
      //this.directionalLightColor = directionalLight.color.getHex();
  };
}

Kalero.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

Kalero.prototype.preRender = function(){
  this.cameraControl.update();
  this.scene.getObjectByName('ambient').color = new THREE.Color(0x111111);
  //this.scene.getObjectByName('directional').color = new THREE.Color(0xffffff);
  this.planet.eventHorizon.waving();
  if(this.tank.is_running){
      this.bgHelicopter.onRender();
      this.tank.muffler.onRender();
      this.tank.group.rotation.y =  this.tank.vehicleMesh.rotation.y;
      this.tank.group.position.y =  this.tank.vehicleMesh.position.y;
      this.tank.group.position.x =  this.tank.vehicleMesh.position.x;
      this.tank.group.position.z =  this.tank.vehicleMesh.position.z;
      this.tank.Gun.onRender(this.tank.vehicleMesh.position.x,this.tank.vehicleMesh.position.y+28,this.tank.vehicleMesh.position.z,this.tank.vehicleMesh.rotation.z,this.tank.vehicleMesh.rotation.y);
  }

  this.condor.onRender();
}
