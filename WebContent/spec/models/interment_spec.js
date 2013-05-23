define(['models/interment'], function(Interment) {
	describe('Model Interment', function() {
	    it('should be defined', function() {
	        expect(Interment).toBeDefined();
	    });
	    
	    it('can be instantiated', function() {
	        var interment = new Interment();
	        expect(interment).not.toBeNull();
	    });
	    
	    it('can call patient', function() {
	        var interment = new Interment();
	        expect(interment.patient()).not.toBeNull();
	    });

	   	it('should be url', function() {
	        var interment = new Interment();
	        expect(interment.url()).toBe('interments');
	    });
	});
});