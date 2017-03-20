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
  this.is_faded = false; 
}

TimedFadeable.prototype.doTimedFade = function(){
  var ftime = this.fadingFrameTime;
  if(this.mesh.material.opacity > 0){
    window.setTimeout(function(){
      this.mesh.material.opacity = this.mesh.material.opacity - 0.1;
      this.doTimedFade();
    }.bind(this),ftime);
  }else{
    this.is_faded = true;
    //some delegate should be removing this
  }
};

TimedFadeable.prototype.loadProp = function(){

};
