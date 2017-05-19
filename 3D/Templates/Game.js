/**
 * 3D Game Template
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var Game = (function(){

  function Game(){
    this.clearColor = 0xa3e1ff;
    this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/checkerboard.jpg';
    this.enable_shadows = true;
    Basic_3D_Template.call(this.p);
    this.floorTexture = null;
  }

  Game.prototype = Object.create(eO._3D.Templates.Basic_3D_Template.prototype);

  Game.prototype.constructor = Game;

  Game.prototype.floorAndSky = function(){
    // FLOOR
    this.floorTexture = new THREE.TextureLoader().load(this.floorTextureUrl);
  	this.floorTexture.wrapS = this.floorTexture.wrapT = THREE.RepeatWrapping;
  	this.floorTexture.repeat.set( 10, 10 );
  	var floorMaterial = new THREE.MeshBasicMaterial( { map: this.floorTexture, side: THREE.DoubleSide } );
  	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
  	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.name = "floor";
  	floor.position.y = -0.5;
  	floor.rotation.x = Math.PI / 2;
    if(this.enable_shadows){
      floor.receiveShadow = true;
    }
  	this.scene.add(floor);
    //sky
  /*  var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
    var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0xa3e1ff, side: THREE.BackSide });
    var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    this.scene.add(skybox);*/
  }

  return Game;
})();
eO._3D.Templates.Game = Game;
