/**
 * DataStats Utilities
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
function DataStats(){

}

DataStats.prototype.addControlGui = function(controlObject) {
    var gui = new dat.GUI();
    gui.add(controlObject, 'rotationSpeed', -0.01, 0.01);
}

DataStats.prototype.addStatsObject = function(){
    stats = new Stats();
    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);
}
