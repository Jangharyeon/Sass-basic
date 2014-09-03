// mac, window 분기
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC')>=0,
	is_Win = navigator.platform.toUpperCase().indexOf('WIN')>=0;
if (is_Mac) {
	$('html').addClass('mac');
}
if (is_Win) {
	$('html').addClass('win');
}