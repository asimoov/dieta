define(['collections/wards'], function(Wards) {
	describe('Collections Wards', function() {
	    it('should be defined', function() {
	        expect(Wards).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var wards = new Wards();
	        expect(wards).not.toBeNull();
	    });
	});
});