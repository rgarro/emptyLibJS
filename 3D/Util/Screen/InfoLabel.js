var InfoLabel = (function(){

  function InfoLabel(game){
    this.game = game;
    this.size = 20;
    this.color = 0xffffff;
    this.height = 1;
    this.curveSegments = 1;
    this.font = null;
    this.loader = new THREE.FontLoader();
    this.loader.load( 'fonts/gentilis_regular.typeface.json', (function (font){
				this.font = font;
			}).bind(this));
  }

InfoLabel.prototype.add = function(name,location,meshName){
  var textGeo = new THREE.TextGeometry( name, {
						font: this.font,
						size: this.size,
						height: this.height,
						curveSegments: this.curveSegments
					});
	var textMaterial = new THREE.MeshBasicMaterial( { color: this.color } );
	var textMesh = new THREE.Mesh( textGeo, textMaterial );
  textMesh.name = meshName;
	textMesh.position.copy(location);
	this.game.scene.add(textMesh);
}

  return InfoLabel;
})();

eO._3D.Util.Screen.InfoLabel = InfoLabel;
