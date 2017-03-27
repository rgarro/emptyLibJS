/**
 * Basic 3D Template with Gravity Options
 *
 * .          .
 *.          .                  .          .              .
 *+.           _____  .        .        + .                    .
 *.   .   ,-~"     "~-.                                +
 *      ,^ ___         ^. +                  .    .       .
 *     / .^   ^.         \         .      _ .
 *    Y  l  o  !          Y  .         __CL\H--.
 *    l_ `.___.'        _,[           L__/_\H' \\--_-          +
 *    |^~"-----------""~ ^|       +    __L_(=): ]-_ _-- -
 *+ . !                   !     .     T__\ /H. //---- -       .
 *.    \                 /               ~^-H--'
 *      ^.             .^            .      "       +.
 *        "-.._____.,-" .                    .
 *+           .                .   +                       .
 *+          .             +                                  .
 *.             .      .
 *
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var Basic_3D_Gravity = (function(){
  function Basic_3D_Gravity(){
    Physijs.scripts.worker = '/libs/physijs_worker.js';
  	Physijs.scripts.ammo = '/libs/ammo.js';
    this.container = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.ini_camera_x = 15;
    this.ini_camera_y = 16;
    this.ini_camera_z =13;
    this.is_camera_set = false;
    this.cameraControl = null;
    this.show_control_gui = false;
    this.show_stats = false;
    this.ds = null;//datastats object
    this.clearColor = 0x000000;
    this.l = new Light();
    if(typeof arguments[0] != 'undefined'){
      this.setContainer(arguments[0]);
    }
  }

  Basic_3D_Gravity.prototype.setContainer = function(containerID){
    if(typeof containerID == 'string'){
      this.container = document.getElementById(containerID);
      if(this.container === null){
        throw new Error("Container doesn exist.");
      }
    }else{
      throw new Error("ContainerID must be a valid String");
    }
  };

  return Basic_3D_Gravity;
})();
eO._3D.Templates.Basic_3D_Gravity = Basic_3D_Gravity;
