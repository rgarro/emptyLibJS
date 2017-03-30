var GravitatedVehicle = (function(){
  function GravitatedVehicle(){
    this.vehicle = null;
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
    this.input = {power: null,direction: null,steering: 0};
  }

  GravitatedVehicle.prototype.setParent = function(game){
    this.parent = game;
    this.isParentSet = true;
  }

  GravitatedVehicle.prototype.loadModel = function(modelUrl){
    if(this.isParentSet){
      var loader = new THREE.JSONLoader();
      loader.load(modelUrl,(function(model,materials){
        var material = new THREE.MeshPhongMaterial();
        material.color.set(this.vehicleColor);
        this.vehicleMesh = new Physijs.BoxMesh(model,material);
        this.vehicleMesh.name = this.vehicleMeshName;
				this.vehicleMesh.position.y = 0;
        this.vehicleMesh.position.x = 0;
        this.vehicleMesh.position.z = 0;
				this.vehicleMesh.castShadow = this.vehicleMesh.receiveShadow = true;
        this.vehicleMesh.scale.set(this.scale,this.scale,this.scale);
        this.vehicle = new Physijs.Vehicle(this.vehicleMesh,new Physijs.VehicleTuning(
					10.88,
					1.83,
					0.28,
					500,
					10.5,
					6000
				));
        this.parent.scene.add(this.vehicle);
      }).bind(this));
    }else{
      throw new Error("Needs a Game parent object");
    }
  }

  GravitatedVehicle.prototype.init = function(){
    this.preInit();
    this.initListeners();
    this.postInit();
  }

  GravitatedVehicle.prototype.initListeners = function(){

  }

  return GravitatedVehicle;
})();
eO.Util.Controlable.GravitatedVehicle = GravitatedVehicle;
