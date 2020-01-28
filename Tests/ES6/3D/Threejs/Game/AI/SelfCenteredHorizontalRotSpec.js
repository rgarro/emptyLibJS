describe("SelfCenteredHorizontalRotator Spec", function() {
  var rotator;

  beforeEach(function() {
    rotator = new SelfCenteredHorizontalRotator();
  });

  it("should be testable", function() {
    expect(true).toBeTrue();
  });

  it("should have setGame method", function() {
    expect(rotator.setGame).toBeDefined();
  });

  it("should have onRender method", function() {
    expect(rotator.onRender).toBeDefined();
  });

  it("should have postLoad method", function() {
    expect(rotator.postLoad).toBeDefined();
  });

  it("should have postRender method", function() {
    expect(rotator.postRender).toBeDefined();
  });

  it("should have loadModel method", function() {
    expect(rotator.loadModel).toBeDefined();
  });
});
