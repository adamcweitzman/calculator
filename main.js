$(function () {


var number1;
var number2;
var operator;


$('#plus').on('click', function() {
	number1 = parseInt($('#number1').val())
	number2 = parseInt($('#number2').val())

	// alert("click")

	$('#display').html(number1 + number2)






	});
$('#minus').on('click', function() {
	number1 = parseInt($('#number1').val())
	number2 = parseInt($('#number2').val())

	// alert("click")

	$('#display').html(number1 - number2)






	});

$('#plus').on('click', function() {
	number1 = parseInt($('#number1').val())
	number2 = parseInt($('#number2').val())

	// alert("click")

	$('#display').html(number1 + number2)






	});

$('#divide').on('click', function() {
	number1 = parseInt($('#number1').val())
	number2 = parseInt($('#number2').val())

	// alert("click")

	$('#display').html(number1 / number2)






	});

$('#multiply').on('click', function() {
	number1 = parseInt($('#number1').val())
	number2 = parseInt($('#number2').val())

	// alert("click")

	$('#display').html(number1 * number2)






	});












});