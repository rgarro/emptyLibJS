/**
 * Tigers on the Mud ....
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Tracks(width,height,x,y,z,rotationY,rotationX){
  this.geometry = null;
  this.material = null;
  this.mesh = null;
  this.trackTextureUrl = "/emptyLibJS/3D/Games/Kalero/assets/tracks.png";

  var trackTexture = new THREE.ImageUtils.loadTexture(this.trackTextureUrl);
  trackTexture.wrapS = trackTexture.wrapT = THREE.RepeatWrapping;
  //trackTexture.repeat.set( 10, 10 );
  this.material = new THREE.MeshBasicMaterial( { map: trackTexture, side: THREE.DoubleSide } );
  this.geometry = new THREE.PlaneGeometry(width, height/3, 10, 10);
  this.mesh = new THREE.Mesh(this.geometry,this.material);
  //track.name = "";
  this.mesh.position.y = y;
  this.mesh.position.x = x;
  this.mesh.position.z = z;
  this.mesh.rotation.x = (Math.PI / 2);
  this.mesh.rotation.z = rotationY;
  TimedFadeable.call(this.p);
}

Tracks.prototype = Object.create(TimedFadeable.prototype);
Tracks.prototype.constructor = Tracks;
