/**
 * horizontal propellers and rotating assets ...
 *
 *   ______.........--=T=--.........______
 *      .             |:|
 *  :-. //           /""""""-.
 *  ': '-._____..--""(""""""()`---.__
 *  /:   _..__   ''  ":""""'[] |""`\\
 *   ': :'     `-.     _:._     '"""" :
 *   ::          '--=:____:.___....-"
 *                   O"       O" grp
 *
 * Los Ejidos de Heredia son rendidos en guerra catolica ...
 *
 * @author Rolando <rgarro@gmail.com>
 */
class SelfCenteredHorizontalRotator {
  constructor() {
    this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
    this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
    this.game = null;
    this.geometry = null;
    this.mesh = null;
    this.gameIsSet = false;
    this.meshName = "";
    this.centerMeshName = "";
    this.radiusLength = 300;

    this.origin = { x: 0, y: 50, z: 0 };

    this.speed = 3;
    this.clockWise = true;
    this.modelLoaded = false;
    this.scale = 2;
    this.color = 0xffffff;
  }

  setGame(game) {
    this.game = game;
    this.gameIsSet = true;
  }

  loadModel(modelUrl) {
    var loader = new THREE.JSONLoader();
    loader.load(
      modelUrl,
      function(model, materials) {
        var texture = THREE.ImageUtils.loadTexture(this.textureUrl);
        var material = new THREE.MeshBasicMaterial({ map: texture });
        this.mesh = new THREE.Mesh(model, material);
        this.mesh.name = this.meshName;
        this.mesh.scale.set(this.scale, this.scale, this.scale);
        this.mesh.position.y = this.altitude;
        this.game.scene.add(this.mesh);
        this.modelLoaded = true;
        this.postLoad();
      }.bind(this)
    );
  }

  postLoad() {}

  postRender() {}

  onRender() {
    if (this.modelLoaded) {
      this.mesh.rotation.y = this.clockWise
        ? this.mesh.rotation.y + this.speed
        : this.mesh.rotation.y - this.speed;
      this.postRender();
    }
  }
}
