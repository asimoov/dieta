define(['collections/natures'], function(Natures) {
	describe('Collections Natures', function() {
	    it('should be defined', function() {
	        expect(Natures).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var natures = new Natures();
	        expect(natures).not.toBeNull();
	    });
	});
});