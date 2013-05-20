define(['models/dish'], function(Dish) {
	describe('Model Dish', function() {
	    it('should be defined', function() {
	        expect(Dish).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var dish = new Dish();
	        expect(dish).not.toBeNull();
	    });

	    it('can call nature', function() {
	        var dish = new Dish();
	        expect(dish.nature()).not.toBeNull();
	    });

	   	it('can call period', function() {
	        var dish = new Dish();

	        dish.set({period: 0});
	        expect(dish.period()).toBe('0h');

	        dish.set({period: 12});
	        expect(dish.period()).toBe('Almoço');

	        dish.set({period: 8});
	        expect(dish.period()).toBe('Desjejum');

	        dish.set({period: -8});
	        expect(dish.period()).toBeUndefined();

	        dish.set({period: 24});
	        expect(dish.period()).toBeUndefined();
	    });
	});
});