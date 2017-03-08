describe("TerrainVehicle controlable",function(){

  var tv;

  beforeAll(function(){
    tv = new TerrainVehicle();
  });

  it("has geometry member",function(){
    expect(tv).toHaveMember('geometry');
  });

  it("has parent member",function(){
    expect(tv).toHaveMember('parent');
  });

  it("has vehicleMesh member",function(){
    expect(tv).toHaveMember('vehicleMesh');
  });

  it("has preInit method",function(){
    expect(tv).toHaveMethod('preInit');
  });

  it("has loadModel method",function(){
    expect(tv).toHaveMethod('loadModel');
  });

  it("has initListeners method",function(){
    expect(tv).toHaveMethod('initListeners');
  });

});
