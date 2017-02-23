describe("DataStats Util",function(){
  var dS;

	beforeAll(function(){
		dS = new DataStats();
	});

	it("has addControlGui method",function(){
		expect(dS).toHaveMethod('addControlGui');
	});

  it("has addStatsObject method",function(){
		expect(dS).toHaveMethod('addStatsObject');
	});
});
