
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "Paris", "paris") {
		correct++;
}
	if (question2 == "Seoul","seoul") {
		correct++;
}	
	if (question3 == "Beijing", "beijing") {
		correct++;
	}
  if (question4 == "Ottawa", "ottawa") {
		correct++;
	}
  if (question5 == "Providence","providence") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var score;

	if (correct == 0) {
		score = 5;
	}

  if (correct == 1) {
		score = 4;
	}
  
  if (correct == 2) {
		score = 3;
	}
  
	if (correct == 3) {
		score = 2;
	}
  
  if (correct == 4) {
		score = 1;
	}
  
  if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("message").innerHTML = "Correct answers: Paris, Seoul, Beijing, Ottawa, Providence";
  document.getElementById("picture").src = pictures[score];
	}
  
