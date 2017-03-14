/**
 * Tigers on the Mud ....
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Tracks(width,height,x,y,rotationY){
  this.geometry = null;
  this.material = null;
  this.mesh = null;
  this.trackTextureUrl = "/emptyLibJS/3D/Games/Kalero/assets/checkerboard.jpg";

  var trackTexture = new THREE.ImageUtils.loadTexture(this.trackTextureUrl);
  trackTexture.wrapS = trackTexture.wrapT = THREE.RepeatWrapping;
  trackTexture.repeat.set( 10, 10 );
  this.material = new THREE.MeshBasicMaterial( { map: trackTexture, side: THREE.DoubleSide } );
  this.geometry = new THREE.PlaneGeometry(width, height, 10, 10);
  this.mesh = new THREE.Mesh(this.geometry,this.material);
  //track.name = "";
  this.mesh.position.y = y;
  this.mesh.position.x = y;
  this.mesh.rotation.y = rotationY;
  TimedFadeable.call(this.p);
}

Tracks.prototype = Object.create(TimedFadeable.prototype);
Tracks.prototype.constructor = Tracks;
