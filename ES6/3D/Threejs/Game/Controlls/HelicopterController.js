class HelicopterController {
  constructor(){
console.log("helicopter controller started");
    this.group = null;
    this.is_controllable = false;
    this.group_is_set = false;
    this.throttle_steps = 10;
    this.max_throttle = 50;
    this.camera = null;
  }

  setGroup(group3d){
    if(group3d.type == "Object3D"){
      this.group = group3d;
      this.group_is_set = true;
    }else{
      throw "HelicopterController needs a Object3D as group";
    }
  }

  moveForward(){}

  moveBackward(){}

  moveLeft(){}

  moveRight(){}

  //moveUp(){}
  throttleUp(){}

  //moveDown(){}
  throttleDown(){}

  rotateLeft(){}

  rotateRight(){}

  pitchFront(){}

  pitchBack(){}


  enableControl(){
    this.is_controllable = true;
console.log(this.is_controllable);
  }

  disableControl(){
    this.is_controllable = false;
console.log(this.is_controllable);    
  }

  initListeners(){
console.log("the fatal sound of broken dreams ...");
  }

}
