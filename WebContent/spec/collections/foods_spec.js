define(['collections/foods'], function(Foods) {
	describe('Collections Foods', function() {
	    it('should be defined', function() {
	        expect(Foods).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var foods = new Foods();
	        expect(foods).not.toBeNull();
	    });
	});
});