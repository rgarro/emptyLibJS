/**
 * Basic 3D Template
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Basic_3D_Template(){
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
  this.ds = null;
  if(typeof arguments[0] != 'undefined'){
    this.setContainer(arguments[0]);
  }
}

//Texture Utilities
Basic_3D_Template.prototype = Object.create(Texture.prototype);


Basic_3D_Template.prototype.setContainer = function(containerID){
  if(typeof containerID == 'string'){
    this.container = document.getElementById(containerID);
    if(this.container === null){
      throw new Error("Container doesn exist.");
    }
  }else{
    throw new Error("ContainerID must be a valid String");
  }
};

Basic_3D_Template.prototype.init = function() {
    if(this.show_stats || this.show_control_gui){
      this.ds = new DataStats();
    }
    this.scene = new THREE.Scene();
    this.setCamera();
    this.camera.lookAt(this.scene.position);
    this.setControl();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;
    this.postInit();
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
    this.render();
}

Basic_3D_Template.prototype.setCamera = function(){
  this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  this.camera.position.x = this.ini_camera_x;
  this.camera.position.y = this.ini_camera_y;
  this.camera.position.z = this.ini_camera_z;
  this.is_camera_set = true;
}

Basic_3D_Template.prototype.setControl = function(){

}

Basic_3D_Template.prototype.postInit = function(){

}

Basic_3D_Template.prototype.preRender = function(){

}

Basic_3D_Template.prototype.render = function(){
  var self = this;
  this.preRender();
  this.renderer.render(this.scene, this.camera);
  window.requestAnimationFrame(function(){self.render();});
}

Basic_3D_Template.prototype.handleResize = function() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
}
