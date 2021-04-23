
/**
 * turns object rotationSteps clockwise or anticlockwise
 */
 export default class HorizontalRotator { 
    constructor(obj3D) { 
        this.obj3D = obj3D;
        this.rotationSteps = 0.02;
        this.isClockWise = true; 
    } 

    ticker(){
        if(this.isClockWise){
            this.obj3D.rotation.y += this.rotationSteps;
        } else {
            this.obj3D.rotation.y -= this.rotationSteps;
        }
    }
 }