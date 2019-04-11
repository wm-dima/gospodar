function only_in_stock(){
	document.querySelector('#only_stock_form').submit();
}

function remove_get_param(param){
	var start = window.location.href.search(param+'=');
	var end = window.location.href.indexOf('&', window.location.href.search(param) );
	var needRemove = window.location.href.slice(start, end == -1 ? window.location.href.length : end + 1 );
	window.location.href = window.location.href.replace(needRemove, '');
}