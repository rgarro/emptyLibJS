/**
 * 3D Game Template
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Game(){
  this.clearColor = 0xa3e1ff;
  this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/checkerboard.jpg';
  Basic_3D_Template.call(this.p);
}

Game.prototype = Object.create(Basic_3D_Template.prototype);

Game.prototype.constructor = Game;

Game.prototype.floorAndSky = function(){
  // FLOOR
	var floorTexture = new THREE.ImageUtils.loadTexture(this.floorTextureUrl);
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
	floorTexture.repeat.set( 10, 10 );
	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.name = "floor";
	floor.position.y = -0.5;
	floor.rotation.x = Math.PI / 2;
	this.scene.add(floor);
  //sky
  var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
  var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0xa3e1ff, side: THREE.BackSide });
  var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
  this.scene.add(skybox);
}
