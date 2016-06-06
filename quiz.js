/* global $ */

$(function () {

});
var currentTurn;

//  #restart()
//  It should restart the game so it can be played again.
function restart () {

}

//  # isGameOver()
//  It should return a true or false if the quiz is over.
function isGameOver () {
  if (numberOfQuestions) return false;
  return true;
}

// # whoWon()
// It should return 0 if the game is not yet finished.
// Else it should return either 1 or 2 depending on which player won.
// It should return 3 if the game is a draw.
function whoWon () {
  return 0;
}

// # numberOfQuestions()
// It should return an integer that is the number of questions in a game
function numberOfQuestions () {
  return 1;
}

// # currentQuestion()
// It should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion () {
  return 0;
}

// # numberOfAnswers()
// It should return an integer that is the number of choices for the current question
function numberOfAnswers () {
  return 2;
}

// # correctAnswer()
// It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer () {
  return 0;
}

// # playTurn(choice)
// It should take a single integer, which specifies which choice the current player wants to make.
// It should return a boolean true/false if the answer is correct.
function playTurn () {
  if (!correctAnswer()) return false;
  if (isGameOver());
}
