/* global $ */

function Question (prompt, answers, correctAnswerIndex) {
  this.prompt = prompt;
  this.choices = answers;
  this.correctChoice = correctAnswerIndex;
}

// using the new keyword and the constructor we can create questions for the quiz
var question1 = new Question('the question', ['answer a', 'answer b', 'answer c', 'answer d'], 0);
var question2 = new Question('second question', ['answer a', 'answer b', 'answer c', 'answer d'], 1);
var question3 = new Question('third question', ['answer a', 'answer b', 'answer c', 'answer d'], 2);
var question4 = new Question('fourth question', ['answer a', 'answer b', 'answer c', 'answer d'], 3);
var question5 = new Question('fifth question', ['answer a', 'answer b', 'answer c', 'answer d'], 1);
var question6 = new Question('sixth question', ['answer a', 'answer b', 'answer c', 'answer d'], 2);

// we can create an object to represent all of the settings and scores for the quiz
var quiz = {
  currentQuestion: 0,
  questions: [question1, question2, question3, question4, question5, question6],
  isGameOver: false,
  player1Points: 0,
  player2Points: 0
};

//  #restart()
//  It should restart the game so it can be played again.
function restart () {
  quiz.currentQuestion = 0;
  quiz.isGameOver = false;
  quiz.player1Points = 0;
  quiz.player2Points = 0;
}

//  # isGameOver()
//  It should return a true or false if the quiz is over.
function isGameOver () {
  return quiz.isGameOver;
}

// # whoWon()
// It should return 0 if the game is not yet finished.
// Else it should return either 1 or 2 depending on which player won.
// It should return 3 if the game is a draw.
function whoWon () {
  if (!quiz.isGameOver) return 0;
  if (quiz.player1Points > quiz.player2Points) return 1;
  if (quiz.player2Points > quiz.player1Points) return 2;
  return 3;
}

// # numberOfQuestions()
// It should return an integer that is the number of questions in a game

function numberOfQuestions () {
  return quiz.questions.length;
}

// # currentQuestion
// It should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion () {
  return quiz.currentQuestion;
}

// # numberOfAnswers()
// It should return an integer that is the number of choices for the current question
function numberOfAnswers () {
  return quiz.questions[quiz.currentQuestion].choices.length;
}

// # correctAnswer()
// It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer () {
  return quiz.questions[quiz.currentQuestion].correctChoice;
}

// # playTurn(choice)
// It should take a single integer, which specifies which choice the current player wants to make.
// It should return a boolean true/false if the answer is correct.
function playTurn (choice) {
  if (quiz.isGameOver) return false;
  var correct = false;
  var playerChoice = parseInt(choice);
  if (playerChoice === quiz.questions[quiz.currentQuestion].correctChoice) {
    correct = true;
    console.log('this is running');
    if (quiz.currentQuestion % 2) {
      quiz.player2Points++;
      console.log(quiz.player2Points);
    } else {
      quiz.player1Points++;
      console.log(quiz.player1Points);
    }
  }
  quiz.currentQuestion++;
  if (((quiz.currentQuestion)) === numberOfQuestions()) {
    quiz.isGameOver = true;
  } else {
  }
  return correct;
}

function updateDisplay () {
  $('.p1Display').html('Player 1 Score: ' + quiz.player1Points);
  $('.p2Display').html('Player 2 Score: ' + quiz.player2Points);
  $('.questionDisplay').html(quiz.questions[quiz.currentQuestion].prompt);
  $('#0').html(quiz.questions[quiz.currentQuestion].choices[0]);
  $('#1').html(quiz.questions[quiz.currentQuestion].choices[1]);
  $('#2').html(quiz.questions[quiz.currentQuestion].choices[2]);
  $('#3').html(quiz.questions[quiz.currentQuestion].choices[3]);
}

$(function () {
  updateDisplay();
  $('button').on('click', function (index) {
    if (isGameOver()) {
      restart();
    } else {
      playTurn(index.target.id);
    }
    updateDisplay();
  });
});
