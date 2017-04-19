/**
 * Utility to remove things from scene ....
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
 var PropsRemover = (function(){

   function PropsRemover(scene){
     this.scene = scene;
   }

   PropsRemover.prototype.remove = function(propMeshName){
     var prop = this.scene.getObjectByName(propMeshName);
     prop._physijs = {};
     prop._physijs.id = -1; 
     this.scene.remove(prop);
   }
   return PropsRemover;
 })();


eO.Util.PropsRemover = PropsRemover;
