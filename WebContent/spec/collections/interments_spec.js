define(['collections/interments'], function(Interments) {
	describe('Collections Interments', function() {
	    it('should be defined', function() {
	        expect(Interments).toBeDefined();
	    });

	    it('can be instantiated', function() {
	        var interments = new Interments();
	        expect(interments).not.toBeNull();
	    });
	});
});