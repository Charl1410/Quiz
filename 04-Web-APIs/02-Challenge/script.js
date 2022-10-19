// list of all questions, choices, and answers
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];
  




//var highscores = document.getElementById("highscores")

var startQuiz = document.getElementById("startQuiz");
var question = document.getElementById("question");
var option = document.getElementById("option");
var message = document.getElementById("message");

var results = document.getElementById("results")
var viewScores = document.getElementById("viewScores");
var welcome = document.getElementById("welcome")

var timer = document.getElementById("timer");

var secondsLeft = 0;
//going to be between 0 and 4 if you have 4 questions
var score = 0;
//TODO current question is important: when you answer it you need to incriment that and go and retrieve the next question from the file
var currentQuestion = 0;
var countDownTimer;

function stopGame() {
  clearInterval(countDownTimer);
}

function startGame() {
  //set variables to 0 because game has started

  secondsLeft = 60;
  currentQuestion = 0;
  score = 0;

  //Start the timer countdown
  countDownTimer = setInterval(function () {
    timer.textContent = secondsLeft + " seconds left";

    secondsLeft--;

    if (secondsLeft <= 0) {
      stopGame();
    }
  }, 1000);

  //hiding the last section and first section
  welcome.style.display = "none";
  results.style.display = "none";

}

function viewHighScore() {
  //hide uneccessary stuff
  welcome.style.display = "none";
  quiz.style.display = "none";
}
  //display question function

function displayQuestion() {
  //increiment the next question
currentQuestion ++;
  //have we run out of questions?

  if (currentQuestion >= question.length) {
    stopGame()
    return;
  }
  //load question from the question array 
 

  var question = questions(currentQuestion);
  document.getElementById("question").textContent = question.title[i]
  

  //clear any existing options from prev question

    option.innerHTML = "";

  //load through the choices and output the new possible options by creating a div that contains the text/question
     //For loop that for each question creates a div containing 
  
  var questionDiv = document.createElement('div');
    questionDiv.textContent = currentQuestion
//TODO I am stuck here 

  //append those into the display (create div append )
}

startQuiz.addEventListener("click", startGame);
viewScores.addEventListener("click", viewHighScore);
