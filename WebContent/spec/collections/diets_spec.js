define(['collections/diets'], function(Diets) {
	describe('Collections Diets', function() {
	    it('should be defined', function() {
	        expect(Diets).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var diets = new Diets();
	        expect(diets).not.toBeNull();
	    });
	});
});