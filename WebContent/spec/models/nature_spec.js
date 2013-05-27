define(['models/nature'], function(Nature) {
	describe('Model Nature', function() {
	    it('should be defined', function() {
	        expect(Nature).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var nature = new Nature();
	        expect(nature).not.toBeNull();
	    });
	    
	    it('can be description', function() {
	        var nature = new Nature();
	        expect(nature.get('description')).not.toBeNull();
	    });
	});
});