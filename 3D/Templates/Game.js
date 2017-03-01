/**
 * 3D Game Template
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Game(){
  Basic_3D_Template.call(this.p);
}

Game.prototype = Object.create(Basic_3D_Template.prototype);

Game.prototype.constructor = Game;
