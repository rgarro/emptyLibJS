describe("Light Util",function(){
  var lU;

  beforeAll(function(){
    lU = new Light();
  });

  it("has getDirectional method",function(){
		expect(lU).toHaveMethod('getDirectional');
	});

  it("has getPoint method",function(){
		expect(lU).toHaveMethod('getPoint');
	});

  it("has getAmbient method",function(){
		expect(lU).toHaveMethod('getAmbient');
	});

  it("has getSpot method",function(){
		expect(lU).toHaveMethod('getSpot');
	});

});
