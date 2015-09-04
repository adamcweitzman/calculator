$(function () {


var number1;
var number2;
var operator;
var answer;
var equation;




	$('#plus').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

	// alert("click")

		answer = number1 + number2

		equation = (number1 + " " + "+" + " " + number2 + " " + "=" + " " + answer)

		$('#display').html(number1 + number2)

		$('#addList').append("<li>" + equation)

	});

	$('#minus').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

	// alert("click")

		answer = (number1 - number2)

		equation = (number1 + " " + "-" + " " + number2 + " " + "=" + " " + answer)

		$('#display').html(number1 - number2)

		$('#addList').append("<li>" + equation)

	});

	$('#plus').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

	// alert("click")


		answer = (number1 + number2)

		$('#display').html(number1 + number2)


	});

	$('#divide').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

	// alert("click")

		answer = (number1 / number2)



		$('#display').html(number1 / number2)



	});

	$('#multiply').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

	// alert("click")

		answer = (number1 * number2)

		$('#display').html(number1 * number2)

	});
















});