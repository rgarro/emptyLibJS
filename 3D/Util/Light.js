/**
 * Light Utilities
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Light(){

}

Light.prototype.getDirectional = function(color,name,vector){
  var directionalLight = new THREE.DirectionalLight(color, 1);
  directionalLight.position = vector;
  directionalLight.name = name;
  return directionalLight;
}

Light.prototype.getSpot = function(){

}

Light.prototype.getAmbient = function(color,name){
  var ambientLight = new THREE.AmbientLight(color);
  ambientLight.name = name;
  return ambientLight;
}

Light.prototype.getPoint = function(){

}
