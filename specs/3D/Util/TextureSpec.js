describe("Texture Util",function(){
  var tU;

	beforeAll(function(){
		tU = new Texture();
	});

	it("has getTexturedMaterial method",function(){
		expect(tU).toHaveMethod('getTexturedMaterial');
	});
});
