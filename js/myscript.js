
var sid = chrome.extension.getBackgroundPage().sid,
	host = chrome.extension.getBackgroundPage().host,
	url = 'https://' + host + '/services/data/v20.0/sobjects/';

var parsedItems = sendAjaxRequest(url);

var myApp = angular.module('myApp',[]);
	
myApp.controller('myController',['$scope', function($scope){

	$scope.itemlist = parsedItems.sobjects;

	$scope.getFields = function(name){
		url = 'https://' + host + '/services/data/v20.0/sobjects/' + name + '/describe';
		result = sendAjaxRequest(url);
		$scope.itemlist = result.fields;
	}

}]);

/**
 * [sendAjaxRequest Request Ajax to paramUrl]
 * @param  {[url]} url [requestUrl]
 * @return {[json]} resultAjax.responseJSON 
 */
function sendAjaxRequest(url){
		var resultAjax = $.ajax({
			async: false,
			cache: true,
			contentType: "application/json",
			data: null,
			dataType: "json",
			type: "GET",
			url: url,
			beforeSend: function(xhr){
				xhr.setRequestHeader('Authorization', 'OAuth ' + sid);
			}
		});
	return resultAjax.responseJSON;
}
