/**
 * 3D Common Routines ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 *
 */
function _3DTools(){

}

_3DTools.prototype.getMeshBoxedDimentions = function(mesh,scale){
  var ret = {};
  mesh.geometry.computeBoundingBox();
  ret.width = (mesh.geometry.boundingBox.max.x - mesh.geometry.boundingBox.min.x) * scale;
  ret.height = (mesh.geometry.boundingBox.max.z - mesh.geometry.boundingBox.min.z) * scale;
  var position = new THREE.Vector3();
  position.setFromMatrixPosition(mesh.matrixWorld);
  ret.x = position.x;
  ret.y = position.y;
  ret.z = position.z;
  ret.rotationY = mesh.rotation.y
  return ret;
}
