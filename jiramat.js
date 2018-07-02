$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	//$('#login-submit').click(function(e) {
	//	$(location).attr('href', '/landing.html');
	//});
	$('#login-forgot').click(function() {
		alert("Tell your IT dude");
	});
	$(document).ready(function(){
		alert('Example of a basic alert box in jquery');
	});

});
