define(['jquery', 'backbone', 'jasmine-sinon', 'routers/interments'], function($, Backbone, Sinon, Interments) {
	describe('Router Interments', function() {
		beforeEach(function() {
			this.router = new Interments();
			this.routeSpy = sinon.spy();
			this.server = sinon.fakeServer.create();
			this.server.autoRespond = true;
			try {
				Backbone.history.start();
			} catch (e) {
			}
			this.router.navigate("elsewhere");
		});
		
		it("fires the interments route", function() {
			$('body').append('<section id="center" style="display:none"></section>');
			this.router.bind("route:index", this.routeSpy);

			this.server.respondWith("GET", "interments?_format=json", [200, {"Content-Type": "application/json"}, '[ { "id": "1", "input": "2013-03-06 16:00:14.0", "cid": "TUBERCULOSE PULMONAR, COM CONFIRMACAO POR EXAME MICROSCÓPIO DA EXPECTORACAO, COM OU SEM CULTURA", "bed": "LEITO 11 CLI HEMATOL", "patient": { "handbook": "", "name": "SINON", "sex": "M", "email": "", "phone": "07199999999", "bird": "2009-10-02 00:00:00.0", "address": "", "complement": "", "uf": "BA", "cep": "", "diets": [ { "id": "100", "weight": "20.0", "height": "0.7", "companion": "true", "levelOfAssistance": "5", "observation": "", "createdAt": "2013-05-24 09:04:37.283" } ] }, "ward": { "description": "1B - UN INT ONCOHEMATO/TMO" } }]']);
			this.router.navigate("interments", true);
			
			waits(500);
			runs(function() {
				expect(this.routeSpy).toHaveBeenCalledOnce();
				expect(this.routeSpy).toHaveBeenCalledWith();
				expect($("section#center").html()).toMatch('SINON');
			});
		});
	});
});