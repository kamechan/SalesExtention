chrome.browserAction.setBadgeText({"text": "100"});

var sid;
var host;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	sid = request.sid;
    	host = request.host;
    	var res = 'finish';
		sendResponse(res);
    });