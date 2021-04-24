/**
 *    _o         >             %
 *   //\_   % <
 *   /\
 *  / /
 * continuos Boomerang behavior on object3d Z axis
 * 
 * @author Rolando <rgarro@gmail.com>
 */
 export default class Boomerang { 
    
    constructor(obj3D) { 
      this.obj3D = obj3D
      this.TranslationTurns = 2;
    } 

    translateOnZ(){
        var initZ = 1.8;//closer point to camera
        var translationMaxZ = -1.86;
        var speed = 0.008;
        
        if((this.TranslationTurns % 2) == 0 ){
          if(this.obj3D.position.z > translationMaxZ){
            this.obj3D.position.z -= speed;
          } else {
            this.TranslationTurns += 1;
          }
        }else{
          if(this.obj3D.position.z < initZ){
            this.obj3D.position.z += speed;
          } else {
            this.TranslationTurns += 1;
          }
        }
        //console.log("translating quadcopter ...");
        //console.log(this.obj3D.position.z);
      }

      ticker(){
          this.translateOnZ();
      }
 }
