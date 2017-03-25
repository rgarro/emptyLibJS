/**
 * Red Foreman muffler shop is in point place wisconsin ....
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var SmokeEmitter = (function(){
  function SmokeEmitter(scene){
    this.scene = scene
    this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/smoke.png";
    this.smokeParticles = null;
    this.smoke = null;
    this.smokeColor = 0x111111;
    this.smokeSize = 50;
    this.transparent = true;
    this.smokeX = -150;
    this.smokeY = 0;
    this.smokeZ = 0;
    this.density = 175;//300
    this.smokeParticles = new THREE.Geometry;
  }

  SmokeEmitter.prototype.doSmoke = function(){
    for (var i = 0; i < this.density; i++) {
      var particle = new THREE.Vector3(Math.random() * 32 - 16, Math.random() * 230, Math.random() * 32 - 16);
      this.smokeParticles.vertices.push(particle);
    }
    var smokeTexture = THREE.ImageUtils.loadTexture(this.textureUrl);
    var smokeMaterial = new THREE.ParticleBasicMaterial({ map: smokeTexture, transparent: this.transparent, blending: THREE.AdditiveBlending, size: this.smokeSize, color: this.smokeColor });
    this.smoke = new THREE.ParticleSystem(this.smokeParticles, smokeMaterial);
    this.smoke.sortParticles = true;
    this.smoke.position.x = this.smokeX;
    this.smoke.position.y = this.smokeY;
    this.smoke.position.z = this.smokeZ;
    this.scene.add(this.smoke);
  }

  SmokeEmitter.prototype.onRender = function(){
    var delta = clock.getDelta();
	//cube.rotation.y -= delta;
	//particleSystem.rotation.y += delta;

	var particleCount = this.smokeParticles.vertices.length;
	while (particleCount--) {
		var particle = this.smokeParticles.vertices[particleCount];
		particle.y += delta * 50;
		if (particle.y >= 230) {
			particle.y = Math.random() * 16;
			particle.x = Math.random() * 32 - 16;
			particle.z = Math.random() * 32 - 16;
		}
	}
	this.smokeParticles.__dirtyVertices = true;
  }

  return SmokeEmitter;
})();

eO.Util.Props.SmokeEmitter = SmokeEmitter;
