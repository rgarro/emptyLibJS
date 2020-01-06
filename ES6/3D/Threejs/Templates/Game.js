/**
 * Threejs es6 Game Template
 *
 * @author Rolando <rgarro@gmail.com>
 */
class Game {
  constructor() {
    this.container = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.ini_camera_x = 15;
    this.ini_camera_y = 16;
    this.ini_camera_z = 13;
    this.is_camera_set = false;
    this.cameraControl = null;
    this.show_control_gui = false;
    this.show_stats = false;
    this.ds = null; //datastats object
    this.clearColor = 0x000000;
    this.enable_shadows = true;
    //this.l = new Light();
    /*if (typeof arguments[0] != "undefined") {
      this.setContainer(arguments[0]);
    }*/
  }

  init() {
    this.scene = new THREE.Scene();
    this.setCamera();
    this.camera.lookAt(this.scene.position);
    this.setControl();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(this.clearColor, 1.0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = this.enable_shadows;
    if (this.renderer.shadowMap.enabled) {
      //this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.shadowMap.type = THREE.BasicShadowMap;
    }
    this.postInit();
    $("#gameContainer").append(this.renderer.domElement);
    /*if (this.show_control_gui) {
      control = new function() {
        this.rotationSpeed = 0.001;
      }();
      //this.ds.addControlGui(control);
    }
    if (this.show_stats) {
      //this.ds.addStatsObject();
    }*/
    this.setLights();
    this.render();
  }

  /**
   * important spot
   */
  render() {
    this.preRender();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(
      function() {
        this.render();
      }.bind(this)
    );
  }

  preRender() {}

  setLights() {}

  setContainer(containerID) {
    if (typeof containerID == "string") {
      this.container = document.getElementById(containerID);
      if (this.container === null) {
        throw new Error("Container doesn exist.");
      }
    } else {
      throw new Error("ContainerID must be a valid String");
    }
  }

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.x = this.ini_camera_x;
    this.camera.position.y = this.ini_camera_y;
    this.camera.position.z = this.ini_camera_z;
    this.is_camera_set = true;
  }

  setControl() {}

  postInit() {}
}
