require([ 
	'jquery',
	'routers/user'
], function($, UserRouter) {
	$(document).ajaxStart(function() {
		$('#loading').show();
	});
	
	$(document).ajaxComplete(function() {
		$('#loading').delay(3000).hide(0);
	});
	
	$(document).ajaxError(function(event, xhr, settings, exception) {
		var message;
		var statusErrorMap = {
			400: "Server understood the request but request content was invalid.",
			401: "Unauthorised access.",
			500: "Internal Server Error.",
			503: "Service Unavailable"
		};
		if (xhr.status) {
			message = statusErrorMap[xhr.status];
			if (xhr.status === 403) {
				UserRouter.signin();
			} else if (!message) {
				$.gritter.add({title: 'Houston, We Have a Problem',text: 'Unknow Error.', sticky: true, time: '' });
			}
		} else if (xhr.status === 0) {
			$.gritter.add({title: 'Houston, We Have a Problem',text: 'Not connected. Please verify network is connected.', sticky: true, time: '' });
		} else if (exception === 'parsererror') {
			$.gritter.add({title: 'Houston, We Have a Problem',text: 'Error.\nParsing JSON Request failed.', sticky: true, time: '' });
		} else if (exception === 'timeout') {
			$.gritter.add({title: 'Houston, We Have a Problem',text: 'Request Time out.', sticky: true, time: '' });
		} else if (exception === 'abort') {
			$.gritter.add({title: 'Houston, We Have a Problem',text: 'Request was aborted by the server', sticky: true, time: '' });
		} else {
			$.gritter.add({title: 'Houston, We Have a Problem',text: 'Unknow Error.', sticky: true, time: '' });
		}
	});
});