/**
 * Mud pushed by Caterpillar engines, cheered by jhon deere, all yellow lambert , multypoly count filling a mesh of joy ...
 *                     _  _                  |-._
 *                  -         - _            |-._|
 *               O                  (). _    |
 *                                    '(_) __|__
 *                                   [__|__|_|_]
 * ~_|_ _|_ _|_       ~~     ~~~      |__|__|_|
 *__ |   |   |       ~~      ~~~      |_|__|__|
 *HH_|___|___|__.--"  ~~~ ~~         /|__|__|_|
 *|__________.-"     ~~~~    ~~~    / |_|__|__|
 *~     ~~ ~      ~~       ~~      /  |_| |___|
 *   ~~~~    ~~~   ~~~~   ~   ~~  /
 *
 * @author Rolando <rolando@emptyart.xyz>
 *
 */

 var KaleroG = (function(){
   function KaleroG(){
     this.ini_camera_x = 35;
     this.ini_camera_y = 36;
     this.ini_camera_z = 33;
     this.tank = null;
     this.show_stats = true;
     this.show_control_gui = true;
     this.control = null;
     this.floorTextureUrl = '/emptyLibJS/3D/Games/Kalero/assets/floorb.png';
     this.clearColor = 0xa5b6c5;
     this.l = new Light();
     eO._3D.Templates.GravityGame.call(this.p);
     this.axisHelper = null;
   }

   KaleroG.prototype = Object.create(eO._3D.Templates.GravityGame.prototype);

   KaleroG.prototype.constructor = KaleroG;

   KaleroG.prototype.postInit = function(){
     var p = this;
     this.camera.position.set(0,150,400);
     this.camera.lookAt(this.scene.position);

    this.axisHelper = new THREE.AxisHelper( 5 );
console.log(this.axisHelper.position.x);
console.log(this.axisHelper.position.y);
console.log(this.axisHelper.position.z);
     this.scene.add(this.axisHelper);

     // Box
        /*box = new Physijs.BoxMesh(
            new THREE.CubeGeometry(50,50,50),
            new THREE.MeshBasicMaterial({ color: 0x888888 })
        );
        box.y = 10;
        this.scene.add( box );*/
      this.loadTank();
   }

   KaleroG.prototype.setControl = function(){
     this.cameraControl = new THREE.OrbitControls(this.camera);
   }

   KaleroG.prototype.loadTank = function(){
     this.tank = new TankG();
     this.tank.setParent(this);
     this.tank.loadModel(this.tank.modelUrl);
     
     //this.tank.init();
   }

   KaleroG.prototype.preRender = function(){
     this.cameraControl.update();
   }

   return KaleroG;
 })();
