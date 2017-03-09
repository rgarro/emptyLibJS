/**
 * 3D Game Template
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Game(){
  this.clearColor = 0x000000;
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
	// SKYBOX/FOG
	//var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
  var skyBoxGeometry = new THREE.BoxGeometry( 10000, 10000, 10000 );
	//var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
  var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
//skyBox.scale.set(-1,1,1);
  skyBox.name = "skyBox";
  this.scene.add(skyBox);
	//this.scene.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );
}
