function Basic_3D_Template(){
  this.container = null;
  this.renderer = null;
  this.scene = null;
  this.camera = null;
  
  if(typeof arguments[0] != 'undefined'){
    this.setContainer(arguments[0]);
  }
}

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
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;

    this.camera.position.x = 15;
    this.camera.position.y = 16;
    this.camera.position.z = 13;
    this.camera.lookAt(this.scene.position);
    this.postInit();
    document.body.appendChild(this.renderer.domElement);

    this.render();
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
