define(['models/food'], function(Food) {
	describe('Model Food', function() {
	    it('should be defined', function() {
	        expect(Food).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var food = new Food();
	        expect(food).not.toBeNull();
	    });
	});
});