/**
 * Red Foreman muffler shop is in point place wisconsin ....
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var SmokeEmitter = (function(){
  function SmokeEmitter(scene){
    this.scene = scene
    this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/smoke.png";
  }

  SmokeEmitter.prototype.doSmoke = function(){
    var smokeParticles = new THREE.Geometry;
    for (var i = 0; i < 300; i++) {
      var particle = new THREE.Vector3(Math.random() * 32 - 16, Math.random() * 230, Math.random() * 32 - 16);
      smokeParticles.vertices.push(particle);
    }
    var smokeTexture = THREE.ImageUtils.loadTexture(this.textureUrl);
    var smokeMaterial = new THREE.ParticleBasicMaterial({ map: smokeTexture, transparent: true, blending: THREE.AdditiveBlending, size: 50, color: 0x111111 });
    var smoke = new THREE.ParticleSystem(smokeParticles, smokeMaterial);
    smoke.sortParticles = true;
    smoke.position.x = -150;
    this.scene.add(smoke);
  }

  SmokeEmitter.prototype.onRender = function(){
    console.log("rendering smoke ,,");
  }

  return SmokeEmitter;
})();

eO.Util.Props.SmokeEmitter = SmokeEmitter;
