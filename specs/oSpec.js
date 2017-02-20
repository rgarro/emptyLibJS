describe("o",function(){
		 var ob;
     var bT;

		 beforeAll(function(){
				   ob = new o();
           bT = new Basic_3D_Template();
		 });

     it("is o object",function(){
   		expect(ob.is_o).toBe(true);
   	});

    it("has a null container",function(){
  		expect(bT.container).toBeNull();
  	});
});
