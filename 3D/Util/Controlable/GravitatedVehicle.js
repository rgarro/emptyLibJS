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
        var friction = 0.3;
        var restitution = 0.9;
        var material = Physijs.createMaterial(
            new THREE.MeshDepthMaterial({ color: this.vehicleColor }),
            friction,
            restitution
        );
        this.vehicleMesh = new Physijs.Mesh(model,material);
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

  GravitatedVehicle.prototype.beforeForward = function(){

  }

  GravitatedVehicle.prototype.beforeTurn = function(){

  }

  GravitatedVehicle.prototype.beforeBackward = function(){

  }

  GravitatedVehicle.prototype.initListeners = function(){
    window.addEventListener('keydown',(function(ev){
          this.controlActions(ev.key);
					/*switch(ev.keyCode){
						case 37: // left
            this.beforeTurn();
							this.input.direction = 1;
							break;
						case 38: // forward
                this.beforeForward();
							this.input.power = true;
							break;
						case 39: // right
            this.beforeTurn();
							this.input.direction = -1;
							break;
						case 40: // back
              this.beforeBackward();
							this.input.power = false;
							break;
					}*/
				}).bind(this));
				window.addEventListener('keyup',(function(ev){
					switch(ev.keyCode){
						case 37: // left
							this.input.direction = null;
							break;
						case 38: // forward
							this.input.power = null;
							break;
						case 39: // right
							this.input.direction = null;
							break;
						case 40: // back
							this.input.power = null;
							break;
					}
				}).bind(this));
        /*this.parent.scene.addEventListener('update',(function(){
				if(this.input && this.vehicle){

					if ( this.input.direction !== null ) {
						this.input.steering += this.input.direction / 50;
						if ( this.input.steering < -.6 ) this.input.steering = -.6;
						if ( this.input.steering > .6 ) this.input.steering = .6;
					}
					this.vehicle.setSteering( this.input.steering, 0 );
					this.vehicle.setSteering( this.input.steering, 1 );

					if ( this.input.power === true ) {
              console.log(this.input);
              console.log(this.vehicle);
						this.vehicle.applyEngineForce( 300 );
					} else if ( this.input.power === false ) {
						this.vehicle.setBrake( 20, 2 );
						this.vehicle.setBrake( 20, 3 );
					} else {
						this.vehicle.applyEngineForce( 0 );
					}
				}
				this.parent.scene.simulate(undefined, 2);
				//physics_stats.update();
			}).bind(this));*/
  }

  GravitatedVehicle.prototype.controlActions = function(keyCode){
    //this.clock = new THREE.Clock();
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

  return GravitatedVehicle;
})();
eO.Util.Controlable.GravitatedVehicle = GravitatedVehicle;
