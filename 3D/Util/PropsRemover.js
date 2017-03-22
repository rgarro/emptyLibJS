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
     this.scene.remove(prop);
   }
   return PropsRemover;
 })();


eO.PropsRemover = PropsRemover;
