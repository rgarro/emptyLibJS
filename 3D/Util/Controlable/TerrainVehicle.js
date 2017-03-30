/**
 * Movable controlable parent terrain vehicle object
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var TerrainVehicle = (function(){

  function TerrainVehicle(){
    this.parent = null;
    this.geometry = null;
    this.vehicleMesh = null;
    this.isParentSet = false;
    this.vehicleMeshName = "terrainVehicle";
    this.pixelsPerSecond = 20;
    this.scale = 2;
    this.vehicleColor = 0xFFFFFF;
    this.clock = new THREE.Clock();
    this.rotationAngleStep = 10;
    this.moveForwardKey = "w";
    this.moveBackwardKey = "s";
    this.turnLeftKey = "a";
    this.turnRightKey = "d";
    this.displaceRightKey = "q";
    this.displaceLeftKey = "e";
    this.is_running = false;
    this.tools = new eO.Util._3DTools();
  }

  TerrainVehicle.prototype.setParent = function(game){
    this.parent = game;
    this.isParentSet = true;
  }

  TerrainVehicle.prototype.preInit = function(){

  }

  TerrainVehicle.prototype.postInit = function(){

  }

  TerrainVehicle.prototype.loadModel = function(modelUrl){
    if(this.isParentSet){
      var loader = new THREE.JSONLoader();
      loader.load(modelUrl,(function(model,materials){
        var material = new THREE.MeshPhongMaterial();
        //var material = new THREE.MeshBasicMaterial();
        material.color.set(this.vehicleColor);
        this.vehicleMesh = new THREE.Mesh(model,material);
        this.vehicleMesh.name = this.vehicleMeshName;
        this.vehicleMesh.scale.set(this.scale,this.scale,this.scale);
        this.parent.scene.add(this.vehicleMesh);
        //this.vehicleMesh.rotation.y = -360;
      }).bind(this));
    }else{
      throw new Error("Needs a Game parent object");
    }
  }

  TerrainVehicle.prototype.initListeners = function(){
    this.clock = new THREE.Clock();
    window.addEventListener("keypress",(function(e){
      this.controlActions(e.key);
    }).bind(this));
    window.addEventListener("keydown",(function(e){
      this.controlActions(e.key);
    }).bind(this));
  }

  TerrainVehicle.prototype.init = function(){
    this.preInit();
    this.initListeners();
    this.postInit();
  }

  TerrainVehicle.prototype.beforeForward = function(){

  }

  TerrainVehicle.prototype.beforeTurn = function(){

  }

  TerrainVehicle.prototype.beforeBackward = function(){

  }

  TerrainVehicle.prototype.controlActions = function(keyCode){
    var delta = this.clock.getDelta(); // seconds.
    var moveDistance = this.pixelsPerSecond * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
    var willRotate = false;
    var rg = null;
    // move forwards/backwards/left/right
    if(keyCode == this.moveForwardKey || keyCode == this.moveForwardKey.toUpperCase()){
      this.beforeForward();
      this.vehicleMesh.translateZ(-moveDistance);
    }
    if(keyCode == this.moveBackwardKey || keyCode == this.moveBackwardKey.toUpperCase()){
      this.beforeBackward();
      this.vehicleMesh.translateZ(moveDistance);
    }
    if(keyCode == this.displaceRightKey || keyCode == this.displaceRightKey.toUpperCase()){
      this.vehicleMesh.translateX(-moveDistance);
    }
    if (keyCode == this.displaceLeftKey || keyCode == this.displaceLeftKey.toUpperCase()){
      this.vehicleMesh.translateX(moveDistance);
    }
    if(keyCode == this.turnLeftKey || keyCode == this.turnLeftKey.toUpperCase()){
      willRotate = true;
      rg = - this.rotationAngleStep;
    }
    if(keyCode == this.turnRightKey || keyCode == this.turnRightKey.toUpperCase()){
      willRotate = true;
      rg = this.rotationAngleStep;
    }
    if(willRotate){
      this.beforeTurn();
      this.vehicleMesh.rotation.y = this.vehicleMesh.rotation.y + rg;
    }
  }

  return TerrainVehicle;
})();

eO.Util.Controlable.TerrainVehicle = TerrainVehicle;
