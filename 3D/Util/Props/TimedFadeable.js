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
  this.propsRemover = null;
  this.propMeshName = null;
  this.index = null;
  this.propArray = null;
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
    if(this.propMeshName.length > 0 && this.propsRemover != null){
      this.propsRemover.remove(this.propMeshName);
      this.propArray.splice(this.index,1);
    }
  }
};

TimedFadeable.prototype.loadProp = function(){

};
