$(function () {


var number1;
var number2;
var operator;
var answer;
var equation;

function alertFunction () {
	alert("You didn't enter a number you buttface")
}




	$('#plus').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())



		if ((!number1 && number1 != 0)  || (!number2 && number2 != 0)) {
			alertFunction()

		} else {


		answer = number1 + number2

		equation = (number1 + " " + "+" + " " + number2 + " " + "=" + " " + answer)

		$('#display').html(number1 + number2)

		$('#addList').append("<li>" + equation)

		};


	});

	$('#minus').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

		if ((!number1 && number1 != 0)  || (!number2 && number2 != 0)) {
			alertFunction()

		} else {

		answer = (number1 - number2)

		equation = (number1 + " " + "-" + " " + number2 + " " + "=" + " " + answer)

		$('#display').html(number1 - number2)

		$('#addList').append("<li>" + equation)

		}

	});

	$('#divide').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

		if ((!number1 && number1 != 0)  || (!number2 && number2 != 0)) {
		alertFunction()

		} else {




		answer = (number1 / number2)

		equation = (number1 + " " + "/" + " " + number2 + " " + "=" + " " + answer)

		$('#display').html(number1 / number2)

		$('#addList').append("<li>" + equation)


		};

	});

	$('#multiply').on('click', function() {
		number1 = parseInt($('#number1').val())
		number2 = parseInt($('#number2').val())

		if ((!number1 && number1 != 0)  || (!number2 && number2 != 0)) {
		alertFunction()

		} else {


		answer = (number1 * number2)

		equation = (number1 + " " + "*" + " " + number2 + " " + "=" + " " + answer)

		$('#display').html(number1 * number2)

		$('#addList').append("<li>" + equation)

		};

	});

});