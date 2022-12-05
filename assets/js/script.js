var highscoreList = document.querySelector("#highscore-list");
var highscoreCountSpan = document.querySelector("#highscore-count");
// create an open array for highscores

var highscores = [];

// The following function renders items in a highscore list as <li> elements
function renderHighscores() {
    // Clear todoList element and update highscoreCountSpan
    highscoreList.innerHTML = "";
    todoCountSpan.textContent = highscores.length;
  
    // Render a new li for each highscore
    for (var i = 0; i < highscores.length; i++) {
      var highscores = highscores[i];
  
      var li = document.createElement("li");
      li.textContent = highscores;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Complete ✔️";
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }

function init() {
    // Get stored highscores from localStorage
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
  
    // If highscores were retrieved from localStorage, update the highscores array to it
    if (storedHighscores !== null) {
      highscores = storedHighscores;
    }
  
    // This is a helper function that will render highscores to the DOM
    renderHighscores();
}

// a timer will be displayed in the top right corner
// a button in the middle named start, once pressed the quiz will begin and the timer starts
document.getElementById("start-button").addEventListener("click", function(){
    var timeleft = 50;
    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft 
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!"
    }
    }, 1000);
    
    console.log('button clicked')
});





// 5 objects with the object name being the question and the multiple chopice answers being the object information
// create an if statment for the false and a seperate if statement for the true

// example???
// [
//     {
//       title: 'Commonly used data types DO NOT include:',
//       choices: ['strings', 'booleans', 'alerts', 'numbers'],
//       answer: 'alerts',
//     },
//     {
//      //similar as above
//     }
//   ]

// each question has to disappear once answered and the next must appear
// there will be light text under the answers to say if it was right or wrong
// once quiz is completed a 'name your score' page must pop up for you to type a short name into
// once score is 'submitted' you will be taken to a highscores page
// once on the highscore page you will see the other scores 

// function secondaryPage {
//     window.open{"./assets/html 2/index2.html"}
// }

// youll be given the options to clear highscores and another to return back to the quiz page
// must be a completed cycle and repeatable

