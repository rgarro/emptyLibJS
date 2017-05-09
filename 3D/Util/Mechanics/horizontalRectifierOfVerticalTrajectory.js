/**
 * si Y es la azul y X la verde hacia adonde se Fugo el Rojo ?...
 * https://www.youtube.com/watch?v=eogcBBY3U5Y
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
	  this.tmpname=null;
    this.cannonLength = 100;
		this.maxtime = 10;
		this.timer = 0;
		this.speed = 25;
		this.tim = 0;
		this.k = 1;
    this.position = {x=0,z=0};
    this.is_moving = false;
  }

 //pero me dices tu nombre y adonde iba el contrabando ...
  horizontalRectifierOfVerticalTrajectory.prototype.setInitPos = function(x,z,angle){
    var angleb = 0;
		var xComponent = 0;
		var zComponent = 0;
		this.myangle = (angle/360)*2*Math.PI;//de aqui en adelante apie , la frontera no esta lejos ...
		xComponent = this.cannonLength*Math.sin(this.myangle);//Nos veremos en el infierno teniente ....
		zComponent = -this.cannonLength*Math.cos(this.myangle);
		this.position.x = xComponent+x;
		this.position.z = zComponent+z;
		this.xMove = (xComponent/this.cannonLength)*this.speed;
		this.yMove = (zComponent/this.cannonLength)*this.speed;
    this.is_moving = true;//como lo habia prometido el Rojo se les fugo ..
  }

  //ahora que estamos parejos te noto que estas temblando ...
  horizontalRectifierOfVerticalTrajectory.prototype.onRender = function(x,z,angle){
    if(this.is_moving){//vale mas que oprima bien la espoleta , sino revienta ...
      this.position.x += this.xMove;
  		this.position.z += this.yMove;
    }
  }


  return horizontalRectifierOfVerticalTrajectory;
})();

eO._3D.Util.Mechanics.horizontalRectifierOfVerticalTrajectory = horizontalRectifierOfVerticalTrajectory;
