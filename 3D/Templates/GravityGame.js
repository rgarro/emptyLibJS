/**
 * 3D Gravity Game Template
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var GravityGame = (function(){

  function GravityGame(){
    this.clearColor = 0xa3e1ff;
    this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/checkerboard.jpg';
    this.xGravity = 0;
    this.yGravity = -30;
    this.zGravity = 0;
    Basic_3D_Gravity.call(this.p);
  }

  GravityGame.prototype = Object.create(eO._3D.Templates.Basic_3D_Gravity.prototype);

  GravityGame.prototype.constructor = GravityGame;

  return GravityGame;
})();
eO._3D.Templates.GravityGame = GravityGame;
