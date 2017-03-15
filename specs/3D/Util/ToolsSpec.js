describe("_3D Tools",function(){
  var tools;

  beforeAll(function(){
    tools = new _3DTools();
  });

  it("has getMeshBoxedDimentions method",function(){
    expect(tools).toHaveMethod('getMeshBoxedDimentions');
  });
});
