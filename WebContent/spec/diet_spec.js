define(['models/diet'], function(Diet) {
	describe('Diet', function() {
	    it('should be defined', function() {
	        expect(Diet).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var diet = new Diet();
	        expect(diet).not.toBeNull();
	    });
	});
});