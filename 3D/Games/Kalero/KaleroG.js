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
     this.xGravity = 0;
     this.yGravity = -30;
     this.zGravity = 0;
     eO._3D.Templates.GravityGame.call(this.p);
     this.axisHelper = null;
     this.SkyBox = null;
   }

   KaleroG.prototype = Object.create(eO._3D.Templates.GravityGame.prototype);

   KaleroG.prototype.constructor = KaleroG;

   KaleroG.prototype.postInit = function(){
     var p = this;
     this.camera.position.set(0,150,400);
     this.camera.lookAt(this.scene.position);

    this.axisHelper = new THREE.AxisHelper( 5 );
    this.scene.add(this.axisHelper);
    this.SkyBox = eO._3D.Factories.SkyBoxFactory("images/dawnmountain-",".png",1200);
    this.SkyBox.name = "cielo";
    this.SkyBox.applyMatrix( new THREE.Matrix4().makeScale( 1, 1, - 1 ) );
    this.scene.add(this.SkyBox);

      this.loadTank();
   }

   KaleroG.prototype.setControl = function(){
     this.cameraControl = new THREE.OrbitControls(this.camera);
   }

   KaleroG.prototype.loadTank = function(){
     this.tank = new TankG();
     this.tank.setParent(this);
     this.tank.loadModel(this.tank.modelUrl);
     this.tank.init();
   }

   KaleroG.prototype.preRender = function(){
     this.cameraControl.update();
     if(this.tank.is_running){
         this.tank.muffler.onRender();
     }
   }

   return KaleroG;
 })();
