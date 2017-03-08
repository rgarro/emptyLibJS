function TerrainVehicle(){
  var tank;

  beforeAll(function(){
    tank = new Tank();
  });

  it("has p member",function(){
    expect(tv).toHaveMember('p');
  });
}
