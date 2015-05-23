var sid = $.cookie("sid"),
	host = location.hostname;

//sendMessage to background.js
chrome.runtime.sendMessage({
		"sid": sid,
		"host": host
	},
	function(response){
		console.log('message sent ' + response);
});
