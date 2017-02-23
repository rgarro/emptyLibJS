/**
 * Texture Utilities
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Texture(){

}

Texture.prototype.getTexturedMaterial = function(imgPath){
  var texture = THREE.ImageUtils.loadTexture(imgPath);
  var material = new THREE.MeshBasicMaterial();
  material.map = texture;
  return material;
}
