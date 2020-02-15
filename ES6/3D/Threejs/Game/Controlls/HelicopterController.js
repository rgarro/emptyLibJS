class HelicopterController {
  constructor(){
    this.group = null;
    this.is_controllable = false;
    this.group_is_set = false;
  }

  setGroup(group3d){
    if(group3d.type == "Object3D"){
      this.group = group3d;
      this.group_is_set = true;
    }else{
      throw "HelicopterController needs a Object3D as group";
    }
  }

  enableControl(){
    this.is_controllable = true;
  }

  disableControl(){
    this.is_controllable = false;
  }

  initListeners(){
console.log("the fatal sound of broken dreams ...");    
  }

}
