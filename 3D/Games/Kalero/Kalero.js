/**
 * Caterpillar White Stone War
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Kalero(){
  this.ini_camera_x = 35;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;
  this.tank = null;
  this.show_stats = true;
  this.show_control_gui = true;
  this.control = null;
  this.l = new Light();
  Game.call(this.p);
}

Kalero.prototype = Object.create(Game.prototype);

Kalero.prototype.constructor = Kalero;

Kalero.prototype.postInit = function(){
  var p = this;
  //var loader = new THREE.ObjectLoader();
  var loader = new THREE.JSONLoader();
loader.load("/emptyLibJS/3D/Games/Kalero/assets/ultimate-tank.json",function(model,materials){
//console.log(model);
    var material = new THREE.MeshPhongMaterial();
    //var material = new THREE.MultiMaterial(materials);
    //material.color = 0xF47a42;
    var mesh = new THREE.Mesh(model,material);
    //mesh.translateY(-0.5);
    //mesh.scale = new THREE.Vector3(3,3,3);
    p.scene.add(mesh);

    // now add some better lighting
    var ambientLight = new THREE.AmbientLight(0xF47a42);
    ambientLight.name='ambient';
    p.scene.add(ambientLight);

    // add sunlight (light
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position = new THREE.Vector3(100,10,-50);
    directionalLight.name='directional';
    p.scene.add(directionalLight);

    this.control = new function () {
        this.rotationSpeed = 0.001;
        this.ambientLightColor = ambientLight.color.getHex();
        this.directionalLightColor = directionalLight.color.getHex();
    };

  });
}

Kalero.prototype.setLights = function(){
  // now add some better lighting
  var ambientLight = this.l.getAmbient(0x9d2020,'ambient');
  this.scene.add(ambientLight);
  // add sunlight light
  var directionalLight = this.l.getDirectional(0xffffff,'directional',new THREE.Vector3(100,10,-50));
  this.scene.add(directionalLight);
}

Kalero.prototype.setControl = function(){
  this.cameraControl = new THREE.OrbitControls(this.camera);
}

Kalero.prototype.preRender = function(){
  this.cameraControl.update();

  this.scene.getObjectByName('ambient').color = new THREE.Color(0x111111);
  this.scene.getObjectByName('directional').color = new THREE.Color(0xffffff);
}
