//will be an array of flashy particles in a recursive routine of repositioning dot product
// of random angles in a limit
//gravity should curve sparks


var Bombetazo  = (function(){
  function Bombetazo(){
    this.movementSpeed = 80;
    this.totalObjects = 1000;
    this.objectSize = 10;
    this.sizeRandomness = 4000;
    this.colors = [0xFF0FFF, 0xCCFF00, 0xFF000F, 0x996600, 0xFFFFFF];
    this.dirs = [];
    this.parts = [];
    this.game = null;
    this.gameIsSet = false;
  }


  Bombetazo.prototype.setGame = function(game){
      this.game = game;
      this.gameIsSet = true;
  }

  Bombetazo.prototype.doBlast = function(x,y){
    var geometry = new THREE.Geometry();

        for (i = 0; i < totalObjects; i ++)
        {
          var vertex = new THREE.Vector3();
          vertex.x = x;
          vertex.y = y;
          vertex.z = 0;

          geometry.vertices.push( vertex );
          dirs.push({x:(Math.random() * movementSpeed)-(movementSpeed/2),y:(Math.random() * movementSpeed)-(movementSpeed/2),z:(Math.random() * movementSpeed)-(movementSpeed/2)});
        }
        var material = new THREE.ParticleBasicMaterial( { size: objectSize,  color: colors[Math.round(Math.random() * colors.length)] });
        var particles = new THREE.ParticleSystem( geometry, material );

        this.object = particles;
        this.status = true;

        this.xDir = (Math.random() * movementSpeed)-(movementSpeed/2);
        this.yDir = (Math.random() * movementSpeed)-(movementSpeed/2);
        this.zDir = (Math.random() * movementSpeed)-(movementSpeed/2);

        scene.add( this.object  );

        this.update = function(){
        if (this.status == true){
          var pCount = totalObjects;
          while(pCount--) {
            var particle =  this.object.geometry.vertices[pCount]
            particle.y += dirs[pCount].y;
            particle.x += dirs[pCount].x;
            particle.z += dirs[pCount].z;
          }
          this.object.geometry.verticesNeedUpdate = true;
        }
      }
  }

  Bombetazo.prototype.onRender = function(){
    var pCount = parts.length;
          while(pCount--) {
            parts[pCount].update();
          }
  }

  return Bombetazo;
})();

eO.Util.Props.Explotions.Bombetazo = Bombetazo;
