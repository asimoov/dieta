define(['models/diet'], function(Diet) {
	describe('Model Diet', function() {
	    it('should be defined', function() {
	        expect(Diet).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var diet = new Diet();
	        expect(diet).not.toBeNull();
	    });

	    it('can call meals', function() {
	        var diet = new Diet();
	        expect(diet.meals()).not.toBeNull();
	    });

	   	it('should be url', function() {
	        var diet = new Diet();
	        expect(diet.url()).toBe('diets');
	    });
	});
});