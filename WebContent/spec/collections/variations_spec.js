define(['collections/variations'], function(Variations) {
	describe('Collections Variations', function() {
	    it('should be defined', function() {
	        expect(Variations).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var variations = new Variations();
	        expect(variations).not.toBeNull();
	    });
	});
});