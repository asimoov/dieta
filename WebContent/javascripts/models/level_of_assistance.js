define(function() {
	return {
		byLevel: function(level) {
			var levels = {1: 8, 2: 8, 3: 3, 4: 2, 5: 1};

			return levels[level];
		},
		descriptions: ["Leve", "Moderado", "Normal", "Grave", "Muito Grave"]
	};
});