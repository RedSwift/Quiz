/* global $ */

function Question (prompt, answers, correctAnswerIndex) {
  this.prompt = prompt;
  this.choices = answers;
  this.correctChoice = correctAnswerIndex;
}

// using the new keyword and the constructor we can create questions for the quiz
var question1 = new Question('For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', ['John 3:16', 'Peter 1:3', '1 John 3:16', 'Luke 2:16'], 0);
var question2 = new Question('Love the Lord your God with all your heart and with all your soul and with all your strength.', ['Matthew 22:37', 'Deuteronomy 6:5', 'Leviticus 19:34', 'Deuteronomy 7:9'], 1);
var question3 = new Question('Above all else, guard your heart, for everything you do flows from it.', ['Proverbs 24:12', 'Philippians 4:7', 'Proverbs 4:23', 'Psalm 20:12'], 2);
var question4 = new Question('Your word is a lamp for my feet, a light on my path.', ['Psalm 119:130', 'Psalm 144:6', 'Psalm 90:8', 'Psalm 119:105'], 3);
var question5 = new Question('Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,', ['Matthew 26:17', 'Matthew 28:19', 'Mark 14:12', 'John 20:12'], 1);
var question6 = new Question('Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."', ['Luke 13:3', 'Mark 14:4', 'John 14:6', 'Matthew 14:4'], 2);

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
    if (quiz.currentQuestion % 2) {
      quiz.player2Points++;
    } else {
      quiz.player1Points++;
    }
  }
  quiz.currentQuestion++;
  if (quiz.currentQuestion === numberOfQuestions()) {
    quiz.isGameOver = true;
  } else {
  }
  return correct;
}

function updateDisplay () {
  if (quiz.currentQuestion === numberOfQuestions()) {
    if (whoWon()) {
      if (whoWon() === 1) {
        $('.winnerDisplay').html('Player 1 Wins!');
      } else if (whoWon() === 2) {
        $('.winnerDisplay').html('Player 2 Wins!');
      } else if (whoWon() === 3) {
        $('.winnerDisplay').html('It is a draw!');
      }
    }
  } else {
    $('.p1Display').html('Player 1 Score: ' + quiz.player1Points);
    $('.p2Display').html('Player 2 Score: ' + quiz.player2Points);
    $('.questionDisplay').html(quiz.questions[quiz.currentQuestion].prompt);
    $('#0').html(quiz.questions[quiz.currentQuestion].choices[0]);
    $('#1').html(quiz.questions[quiz.currentQuestion].choices[1]);
    $('#2').html(quiz.questions[quiz.currentQuestion].choices[2]);
    $('#3').html(quiz.questions[quiz.currentQuestion].choices[3]);
    $('.winnerDisplay').html('');
  }
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
