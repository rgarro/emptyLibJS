describe("o",function(){
		 var ob;

		 beforeAll(function(){
				   ob = new o();
		 });

     it("is o object",function(){
   		expect(ob.is_o).toBe(true);
   	});
});
