require([ 
	'jquery',
	'views/login'
], function($, Login) {
	$(document).ajaxStart(function() {
		$('#loading').show();
	});
	
	$(document).ajaxComplete(function() {
		$('#loading').delay(1000).hide(0);
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
				Login.render();
			} else if (!message) {
				message = "Unknow Error \n.";
			}
		} else if (xhr.status === 0) {
			message = "Not connected. Please verify network is connected.";
		} else if (exception === 'parsererror') {
			message = "Error.\nParsing JSON Request failed.";
		} else if (exception === 'timeout') {
			message = "Request Time out.";
		} else if (exception === 'abort') {
			message = "Request was aborted by the server";
		} else {
			message = "Unknow Error \n.";
		}
		$(".log").css("display", "inline");
		$(".log").html(message);
	});
});