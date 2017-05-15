/**
 * SkyBox Factory
 *
 * @author Rolando <rolando@emptyart.xyz>
 *
 */
eO._3D.Factories.SkyBoxFactory = function(imagePrefix,imageSuffix,size){
	var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
	var skyGeometry = new THREE.BoxGeometry(size, size,size);
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: new THREE.TextureLoader().load(imagePrefix + directions[i] + imageSuffix ),
			side: THREE.DoubleSide
		}));
	//var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	return new THREE.Mesh( skyGeometry, materialArray );
}
