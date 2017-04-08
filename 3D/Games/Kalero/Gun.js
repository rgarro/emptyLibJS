/**
 *
 *
 *
 *
 *             ,______
 *          _./       \_
 *        /'     -=X=-  \
 *       /        <_>___\___/---_H_
 *      Z---|     |-------   --/_O_)
 *       __ |__   L___^|^^^^^\--\__/
 *      /     \\ __T__ |___
 *     / __|__ \\__^  _|   \_
 *S-v|-  __^\   _|__| _/ _ __\
 * ----| O  ))==|___ _|==-) ||
 *     \ _//            \__//
 *
 * @author Rolando <rolando@emptyart.xyz>
 */

function Gun(){
  this.modelUrl = null;
  this.pos = new THREE.Vector3();
  this.quat = new THREE.Quaternion();
  this.distance = 300;
}

Gun.prototype = Object.create(eO._3D.Util.Props.Throwable.prototype);
