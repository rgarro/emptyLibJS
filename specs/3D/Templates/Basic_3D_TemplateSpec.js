describe("Basic_3D_Template",function(){
	var bT;

	beforeAll(function(){
		bT = new Basic_3D_Template();
	});

	it("has a null container",function(){
		expect(bT.container).toBeNull();
	});

  it("has a null renderer",function(){
		expect(bT.renderer).toBeNull();
	});

  it("has a null scene",function(){
		expect(bT.scene).toBeNull();
	});

  it("has a null camera",function(){
		expect(bT.camera).toBeNull();
	});

	it("has an int ini_camera_x",function(){
		expect(bT.ini_camera_x).toBeNumber();
		expect(bT).toHaveNumber('ini_camera_x');
		expect(bT.ini_camera_x).toBeGreaterThan(0);
	});

	it("has an int ini_camera_y",function(){
		expect(bT.ini_camera_y).toBeNumber();
		expect(bT).toHaveNumber('ini_camera_y');
		expect(bT.ini_camera_y).toBeGreaterThan(0);
	});

	it("has an int ini_camera_z",function(){
		expect(bT.ini_camera_z).toBeNumber();
		expect(bT).toHaveNumber('ini_camera_z');
		expect(bT.ini_camera_z).toBeGreaterThan(0);
	});

	it("has a boolean is_camera_set",function(){
		expect(bT.is_camera_set).toBeBoolean();
		expect(bT.is_camera_set).toBeFalse();
	});

	it("has a boolean show_control_gui",function(){
		expect(bT.show_control_gui).toBeBoolean();
		expect(bT.show_control_gui).toBeFalse();
	});

	it("has a boolean show_stats",function(){
		expect(bT.show_stats).toBeBoolean();
		expect(bT.show_stats).toBeFalse();
	});

	it("has a null cameraControl",function(){
		expect(bT.cameraControl).toBeNull();
	});

	it("has setCamera method",function(){
		expect(bT).toHaveMethod('setCamera');
	});

	it("calling setCamera set camera to perspective camera object",function(){
		bT.setCamera();
		expect(bT.camera.frustumCulled).toBeTrue();
		expect(bT.is_camera_set).toBeTrue();
	});

	it("has setControl method",function(){
		expect(bT).toHaveMethod('setControl');
	});

});
