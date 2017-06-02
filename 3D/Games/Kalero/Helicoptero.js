/**
 *  mario sotela tenia un helicoptero para ir a surfear ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Helicoptero(){
  this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
  this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
  this.game = null;
  this.geometry = null;
  this.mesh = null;
  this.gameIsSet = false;
  this.meshName = "helicopteroBody";
  this.centerMeshName = "elTanque";
  this.radiusLength = 100;
  this.altitude = 90;//y
  this.origin = {x:0,y:0,z:0};
  this.angle = 30;
  this.speed = 0.9;
  this.clockWise = true;
  this.modelLoaded = false;
  this.scale = 11;
  this.propeller = null;
  this.rudder = null;
  this.dropKey = "y";//testing Wo FallingBouncer
  this.group = new THREE.Object3D();
  this.ball_fell = false;
  this.balls = [];
  this.PropsRemover = null;
  createjs.Sound.registerSound("/mp3/Helicopt-Diode111-8858_hifi.mp3", 'heliSound');
  //eO._3D.Util.AI.Orbitator.call(this.p);
  eO._3D.Util.AI.FollowAndSurround.call(this.p);
}

//Helicoptero.prototype = Object.create(eO._3D.Util.AI.Orbitator.prototype);
Helicoptero.prototype = Object.create(eO._3D.Util.AI.FollowAndSurround.prototype);
Helicoptero.prototype.constructor = Helicoptero;

Helicoptero.prototype.postLoad = function(){
  var s = createjs.Sound.play('heliSound',{loop:1000});
  s.volume = 0.3;
  this.mesh.rotation.y = -90;
  this.initPropeller();
  this.initRudder();
  if(this.game.enable_shadows){
    this.mesh.castShadow = true;
  }
  this.group.add(this.mesh);
  this.group.add(this.propeller.mesh);
  this.group.add(this.rudder.mesh);
  this.game.scene.add(this.group);
  this.PropsRemover = new eO.Util.PropsRemover(this.game.scene);
  this.initListeners();
}

Helicoptero.prototype.initListeners = function(){
  window.addEventListener("keypress",(function(e){
    this.controlActions(e.key);
  }).bind(this));
  window.addEventListener("keydown",(function(e){
    this.controlActions(e.key);
  }).bind(this));
}

Helicoptero.prototype.controlActions = function(keyCode){
  if(keyCode == this.dropKey || keyCode == this.dropKey.toUpperCase()){
    if(this.game.tank.is_running){
      var basketball = new FallingBall();
      basketball.FallingBouncer.setPlanet(this.game.planet);
      basketball.FallingBouncer.rotationY = this.game.tank.vehicleMesh.rotation.y;
      basketball.drop(this.group.position.x,this.altitude+50,this.group.position.z);
      basketball.FallingBouncer.start(this.group.position.x,this.altitude+50,this.group.position.z);
      this.game.scene.add(basketball.mesh);
      basketball.is_thrown = true;
      this.game.planet.eventHorizon.lineUp(basketball.FallingBouncer);
      this.balls.push(basketball);
    }
  }
}

Helicoptero.prototype.initRudder = function(){
  this.rudder = new HeliRudder();
  this.rudder.origin.y = this.altitude + 10;
  this.rudder.origin.x = 50;
  this.rudder.origin.z = 28;
  this.rudder.setGame(this.game);
  this.rudder.loadModel("/cube/");
}

Helicoptero.prototype.initPropeller = function(){
  this.propeller = new HeliPropeller();
  this.propeller.origin.y = this.altitude + 10;
  this.propeller.setGame(this.game);
  this.propeller.loadModel("/cube/");
}

Helicoptero.prototype.ballsLoop = function(){
  if(this.balls.length > 0){
    for(var i =0; i < this.balls.length;i++){
      var ball = this.balls[i];
      if(ball.FallingBouncer.started){
        ball.fall();
      }else{
        this.PropsRemover.remove(this.game.scene.getObjectByName(ball.meshName))
        this.balls.splice(i,1);//atlantic city police arrested 3 with Heroin
        i --;
      }
    }
  }
}

Helicoptero.prototype.postRender = function(){
  this.ballsLoop();
  this.propeller.mesh.position.x = this.mesh.position.x;
  this.propeller.mesh.position.z = this.mesh.position.z;
  this.propeller.mesh.position.x = this.mesh.position.x;
  this.group.position.z = this.mesh.position.z;
  this.group.position.x = this.mesh.position.x;
  this.group.position.y = this.mesh.position.y;
  this.propeller.onRender();
  this.rudder.onRender(this.mesh.position.x + 50,this.mesh.position.y,this.mesh.position.z + 28);
}
