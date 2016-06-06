/* global $ */

function Question (prompt, answers, correctAnswerIndex) {
  this.prompt = prompt;
  this.choices = answers;
  this.correctChoice = correctAnswerIndex;
}

// using the new keyword and the constructor we can create questions for the quiz
var question1 = new Question('the question', ['answer a', 'answer b', 'answer c', 'answer d'], 0);

// we can create an object to represent all of the settings and scores for the quiz
var quiz = {
  currentQuestion: 0,
  questions: [question1, question1, question1, question1],
  isGameOver: false,
  player1Points: 0,
  player2Points: 0
};

$(function () {
  $('button').on('click', function (index) {
    playTurn(index.target.id);
  });
});



//  #restart()
//  It should restart the game so it can be played again.
function restart () {

}

//  # isGameOver()
//  It should return a true or false if the quiz is over.
function isGameOver () {
  if (currentQuestion > numberOfQuestions) return true;
  return false;
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
  return quiz.questions.length;
}

// # currentQuestion()
// It should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion () {
  return quiz.currentQuestion;
}

// # numberOfAnswers()
// It should return an integer that is the number of choices for the current question
function numberOfAnswers () {
  return 4;
}

// # correctAnswer()
// It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer () {
  return 1;
}

// # playTurn(choice)
// It should take a single integer, which specifies which choice the current player wants to make.
// It should return a boolean true/false if the answer is correct.
function playTurn (choice) {
  console.log(choice);
}
