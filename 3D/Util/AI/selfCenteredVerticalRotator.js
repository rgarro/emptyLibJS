/**
 * el Granma iba cargado de anfetaminas y llebaba al che ...
 * Dr Harol Cham aka the granny bomber.. chunky bacon
 * ruby was developed by cuban disidents trying to
 * impede Fidel Castro achieve inmortality..
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var selfCenteredVerticalRotator = (function(){

  function selfCenteredVerticalRotator(){
    this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
    this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
    this.game = null;
    this.geometry = null;
    this.mesh = null;
    this.gameIsSet = false;
    this.meshName = "";
    this.centerMeshName = "";
    this.radiusLength = 300;

    this.origin = {x:0,y:50,z:0};

    this.speed = 3;
    this.clockWise = true;
    this.modelLoaded = false;
    this.scale = 2;
    this.color = 0xFFFFFF;
  }

  selfCenteredVerticalRotator.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
  }

  selfCenteredVerticalRotator.prototype.loadModel = function(modelUrl){
    var loader = new THREE.JSONLoader();
    loader.load(modelUrl,(function(model,materials){
      var texture = THREE.ImageUtils.loadTexture(this.textureUrl);
      var material = new THREE.MeshBasicMaterial({map:texture});
      this.mesh = new THREE.Mesh(model, material);
      this.mesh.name = this.meshName;
      this.mesh.scale.set(this.scale,this.scale,this.scale);
      this.mesh.position.y = this.altitude;
      this.game.scene.add(this.mesh);
      this.modelLoaded = true;
      this.postLoad();
    }).bind(this));
  }

  selfCenteredVerticalRotator.prototype.postLoad = function(){

  }

  selfCenteredVerticalRotator.prototype.postRender = function(){

  }

  selfCenteredVerticalRotator.prototype.onRender = function(x,y,z){
    if(this.modelLoaded){
      this.mesh.position.z = z - 50;//parent mesh is turning ruder flies away from tail ask yoda ..
      this.mesh.position.x = x + 50;
      this.mesh.position.y = y;
      this.mesh.rotation.x = (this.clockWise ? this.mesh.rotation.x + this.speed : this.mesh.rotation.x - this.speed);;
      this.postRender();
    }
  }

  return selfCenteredVerticalRotator;
})();
eO._3D.Util.AI.selfCenteredVerticalRotator = selfCenteredVerticalRotator;
