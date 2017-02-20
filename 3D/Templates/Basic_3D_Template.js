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
