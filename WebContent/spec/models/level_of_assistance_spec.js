define(['models/levelOfAssistance'], function(LevelOfAssistance) {
	describe('Model LevelOfAssistance', function() {
	    it('should be defined', function() {
	        expect(LevelOfAssistance).toBeDefined();
	    });
	    
	    it('can be byLevel', function() {
	    	expect(LevelOfAssistance.byLevel(1)).toBe(8);
	    	expect(LevelOfAssistance.byLevel(5)).toBe(1);
	    	expect(LevelOfAssistance.byLevel(3)).toBe(3);
	    	expect(LevelOfAssistance.byLevel(2)).toBe(8);
	    	expect(LevelOfAssistance.byLevel(4)).toBe(2);
	    });
	});
});