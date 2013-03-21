require([ 
	'jquery' 
], function($) {
	$.ajaxSetup({
		cache: false,
        beforeSend: function(xhr) {
           $('#loader').show();
        },
        complete: function(xhr) {
           $('#loader').hide();
        },
        error: function(xhr, status, exception) {
    		var message;
    		var statusErrorMap = {
    			'400' : "Server understood the request but request content was invalid.",
    			'401' : "Unauthorised access.",
    			'403' : "Forbidden resouce can't be accessed",
    			'500' : "Internal Server Error.",
    			'503' : "Service Unavailable"
    		};
    		if (xhr.status) {
    			message = statusErrorMap[xhr.status];
    			if (!message) {
    				message = "Unknow Error \n.";
    			}
    		} if (xhr.status === 0) {
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
    	}
    });
});