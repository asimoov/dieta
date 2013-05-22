define(['collections/meals'], function(Meals) {
	describe('Collections Meals', function() {
	    it('should be defined', function() {
	        expect(Meals).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var meals = new Meals();
	        expect(meals).not.toBeNull();
	    });
	    
	    it('can be order', function() {
	        var meals = new Meals([{period: 8}, {period: 12}, {period: 15}, {period: 23}]);
	        expect(meals.at(0).get('period')).toBe(12);
	        expect(meals.at(1).get('period')).toBe(15);
	        expect(meals.at(2).get('period')).toBe(23);
	        expect(meals.at(3).get('period')).toBe(8);
	    });
	});
});