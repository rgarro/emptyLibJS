/**
 * una ardilla de 0.73 kg cae de un poste de luz y llega al suelo
 * en la mitad que dura el canto de un sanate negro  (1.7s) en el mes de junio  ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function Ardilla(){
  this.ini_camera_x = 35;
  this.ini_camera_y = 36;
  this.ini_camera_z = 33;

  this.show_stats = true;
  this.show_control_gui = true;
  this.control = null;
  this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/floorb.png';
  this.clearColor = 0xa5b6c5;
  this.l = new Light();

  this.planet = new Wo.Planet();
  this.enable_shadows = true;
  this.Helicoptero = null;
  Game.call(this.p);
}

Ardilla.prototype = Object.create(eO._3D.Templates.Game.prototype);

Ardilla.prototype.constructor = Ardilla;

Ardilla.prototype.postInit = function(){
  this.Helicoptero = new Helicoptero();
}
