describe("Kalero t72 Tank",function(){
  var tank;

  beforeAll(function(){
    tank = new Tank();
  });

  it("has parent member",function(){
    expect(tank).toHaveMember('parent');
  });

});
