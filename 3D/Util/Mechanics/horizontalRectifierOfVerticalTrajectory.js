/**
 * Los guerrilleros cargan el fusil como una cruz
 * hasta que algun buen marxista les explica que
 * las FARC es la fuerza de la amplitud de los gases a la velocidad...
 * Threejs es el pino de la madera de la culata del Kalashinov .
 *
 *  ||
 *  ||_________________________/'|
 * _| O======/                   |
 *|_|              ============  |
 *  |  __  ______________________|
 *  |_/  )(     |___||     O-   /
 *      (  )    /  / |_________/
 *      (  )   /  /    | ) |   |
 *      (__)  /  /     \___|__(
 *           /  /          )   \
 *          /  /            )   \
 *         /  /              )___\
 *        /  /       /__/
 *
 * @author Rolando <rolando@emptyart.xyz>
 */


var horizontalRectifierOfVerticalTrajectory  = (function(){
  function horizontalRectifierOfVerticalTrajectory(){
    this.xMove = null;
	  this.zMove = null;
	  this.myangle = null;
	  this.tmpname:String;
    this.cannonLength = 100;
		this.maxtime = 10;
		this.timer = 0;
		this.speed = 25;
		this.tim = 0;
		this.k = 1;
    this.position = {x=0,z=0};
  }

  horizontalRectifierOfVerticalTrajectory.prototype.setInitPos = function(x,z,angle){
    var angleb = 0;
		var xComponent = 0;
		var zComponent = 0;
		//this._rotation = angle;
		this.myangle = (angle/360)*2*Math.PI;
		xComponent = this.cannonLength*Math.sin(this.myangle);
		zComponent = -this.cannonLength*Math.cos(this.myangle);
		this.position.x = xComponent+x;
		this.position.z = zComponent+z;
		this.xMove = (xComponent/this.cannonLength)*this.speed;
		this.yMove = (zComponent/this.cannonLength)*this.speed;
  }

  return horizontalRectifierOfVerticalTrajectory;
})();

eO._3D.Util.Mechanics.horizontalRectifierOfVerticalTrajectory = horizontalRectifierOfVerticalTrajectory;
