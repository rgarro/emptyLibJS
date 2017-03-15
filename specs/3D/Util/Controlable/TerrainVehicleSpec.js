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

  it("has tools member",function(){
    expect(tv).toHaveMember('tools');
  });

  it("tools property is typeof _3DTools",function(){
    expect((typeof tv.tools == "_3DTools")).toBeTrue();
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

  it("has init method",function(){
    expect(tv).toHaveMethod('init');
  });
});
