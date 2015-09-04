$(function () {


var number1;
var number2;
var operator;


$('#calculate').on('click', function() {
	number1 = parseInt($('#number1').val())
	number2 = parseInt($('#number2').val())
	
	if ("+") {
		$('#display').html(number1 + number2)
	
	} else if ("-") {
		$('#display').html(number1 - number2)
	}

	// if ("/") {
	// 	$('#display').html(number1 % number2)
	// }




	});
});