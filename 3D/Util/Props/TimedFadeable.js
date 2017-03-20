/**
 * Timed Fadeable Prop object, like tracks , passing things ....
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function TimedFadeable(){
  this.geometry = null;
  this.material = null;
  this.mesh = null;
  this.trackTextureUrl = "/emptyLibJS/3D/Games/Kalero/assets/checkerboard.jpg";
  this.fadingFrameTime = 3000;
}

TimedFadeable.prototype.doTimedFade = function(){
  var ftime = this.fadingFrameTime;
  window.setTimeout(function(){
    console.log("timing come on ..." + ftime);
    console.log(this.mesh.material.opacity);
    this.mesh.material.opacity = this.mesh.material.opacity - 0.1;
    this.doTimedFade();
  }.bind(this),ftime);
};

TimedFadeable.prototype.loadProp = function(){

};
