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

});
