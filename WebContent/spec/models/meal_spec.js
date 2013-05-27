define(['models/meal'], function(Meal) {
	describe('Model Meal', function() {
	    it('should be defined', function() {
	        expect(Meal).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var meal = new Meal();
	        expect(meal).not.toBeNull();
	    });
	    
	    it('can call nature', function() {
	        var meal = new Meal();
	        expect(meal.nature()).not.toBeNull();
	    });
	    
	    it('can be period', function() {
	    	var meal = new Meal();
	    	expect(meal.get("period")).not.toBeNull();
	    });
	});
});