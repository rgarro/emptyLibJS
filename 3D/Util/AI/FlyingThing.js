/**
 * It should levitate avobe ground level with preconfigurable self aware objects named Artificial Intelligence ....
 * ______.........--=T=--.........______
 *    .             |:|
 *  :-. //           /""""""-.
 * ': '-._____..--""(""""""()`---.__
 * /:   _..__   ''  ":""""'[] |""`\\
 * ': :'     `-.     _:._     '"""" :
 *  ::          '--=:____:.___....-"
 *                  O"       O" grp
 * @author Rolando <rolando@emptyart.xyz>
 */
var FlyingThing = (function(){

  function FlyingThing(){
    this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28.json";
    this.game = null;
    this.geometry = null;
    this.mesh = null;
    this.gameIsSet = false;
    this.meshName = "gatoVolador";
  }

  FlyingThing.prototype.setGame = function(game){
    this.game = game;
    this.gameIsSet = true;
  }

  FlyingThing.prototype.loadModel = function(modelUrl){

  }

  return FlyingThing;
})();
