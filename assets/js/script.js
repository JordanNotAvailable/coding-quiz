//set all global variables
var body = document.querySelector("body");
var timer = document.querySelector("#time");
var startButton = document.querySelector("#start-button");
var question = document.querySelector(".question");
var choicesGroup = document.querySelector(".answerChoices");
var returnAnswer = document.querySelector(".returnAnswer");
var finalScore = document.querySelector(".final-score");
var endOfGame = document.querySelector(".endgame");
var main = document.querySelector(".main");
var title = document.querySelector(".title");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var submitInitials = document.querySelector(".submit");

var currentTime = timer.textContent;
var userQuestion = 0;

//set high score to 0 if there isn't a high score in local storage 
var highScore = localStorage.getItem(".highScore");
if (highScore === null) {
  localStorage.setItem("highScore", 0);
  highScore = 0;
}

// empty array to track highscores
var scores = [];

//create an array of all questions wiht their corresponding answers
// example?
//[
//   {
//     title: 'Commonly used data types DO NOT include:',
//     choices: ['strings', 'booleans', 'alerts', 'numbers'],
//     answer: 'alerts',
//   },
//   {
//    //similar as above
//   }
// ]
var questions = [{
  questionString: "Commonly used data types DO NOT include:",
  answers: ["strings", "booleans", "alerts", "numbers"],
  correctAnswer: 2,
},
{
  questionString: "The condition in an if / else statement is enclosed within _____.",
  answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
  correctAnswer: 2,
},
{
  questionString: "Arrays in JavaScript can be used to store _____.",
  answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
  correctAnswer: 3,
},
{
  questionString: "String values must be enclosed within _____ when being asssigned to variables.",
  answers: ["commas", "curly brackets", "quotes", "parentheses"],
  correctAnswer: 1,
},
{
  questionString: "A very useful tool used during developing and debugging for printing content to debugger is:",
  answers: ["console.log", "JavaScript", "terminal/bash", "for loops"],
  correctAnswer: 0,
}   
]

// create dynamic elements for answers and new questions
function quizQuestion(timerInterval) {
  checkTime(timerInterval);
  if (userQuestion < questions.length) {
    question.textContent = questions[userQuestion].questionString;
    answer1.textContent = questions[userQuestion].answers[0];
    answer2.textContent = questions[userQuestion].answers[1];
    answer3.textContent = questions[userQuestion].answers[2];
    answer4.textContent = questions[userQuestion].answers[3];
  } else {
    endGame();
  }
}

// check if answer is correct or incorrect and display message 
function checkAnswer() {
  if ((this.textContent) == (questions[userQuestion].answers[questions[userQuestion].correctAnswer])) {
    returnAnswer.textContent= "Correct! 😊";
  } else {
    currentTime -= 5;
    returnAnswer.textContent="Incorrect! 😢";
    if (currentTime < 1) {
      endGame();
    }
  }
  userQuestion++;
  
  quizQuestion();
}

// call the checking answer function of each answer clicked
var buttons = document.querySelectorAll(".answer-choice").forEach(function (event) {
  event.addEventListener("click", checkAnswer);
})

// make sure theres time left and if time runs out end the game
function checkTime(timerInterval) {
  if (userQuestion == questions.length) {
    clearInterval(timerInterval);
    endGame();
  } else if (currentTime <= 0) {
    timer.textContent = 0;
    currentTime = 0;
    clearInterval(timerInterval);
    endGame();
  }
}

// end game
function endGame() {
  question.style.display = "none";
  choicesGroup.style.display = "none";
  returnAnswer.style.display = "none";
  endOfGame.style.display = "block";
  title.style.display = "none";
  
  if (currentTime > parseInt(localStorage.getItem("highScore"))) {
    finalScore.textContent = ("You have the new high score! Your final score is " + currentTime + ".");
  } else {
    finalScore.textContent = ("Your final score is " + currentTime + ".");
  }
}

// reset to beginning to repeat game
function resetGame() {
  var nickname = document.querySelector("#nickname").value;
  localStorage.setItem("highScore", currentTime);
  localStorage.setItem(nickname, currentTime);
}

// click event for submit button
// fix local storage section
submitInitials.addEventListener("click", function(){
  window.location.href= "index2.html"

  var storeHighscores = JSON.parse(localStorage.getItem("scores"));

  localStorage.setItem("scores", JSON.stringify(scores));
})

// start button with click function to begin game
startButton.addEventListener("click", function () {
  var timerStart = setInterval(function () {
    currentTime--;
    timer.textContent = currentTime;
    checkTime(timerStart);
  }, 1000)
  
  startButton.style.display= "none";
  choicesGroup.style.display = "block";
  main.style.display = "block";
  question.style.display = "block";
  
  quizQuestion(timerStart);
});