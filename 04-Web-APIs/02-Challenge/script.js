// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var highscores = document.getElementById("highscores");

var startQuiz = document.getElementById("startQuiz");
var currentScore = document.getElementById("currentScore");
var question = document.getElementById("question");
var option = document.getElementById("option");
var message = document.getElementById("message");

var results = document.getElementById("results");
var viewScores = document.getElementById("viewScores");
var welcome = document.getElementById("welcome");

var timer = document.getElementById("timer");

//Setting variables to 0 for start
var secondsLeft = 0;
var currentScore = 0;
var currentQuestionIndex = 0;
var countDownTimer;

//clear coundown timer to stop game
function stopGame() {
  clearInterval(countDownTimer);

  quiz.style.display = "none";
  welcome.style.display = "none";
}

//Function to begin the game
function startGame() {
  secondsLeft = 60;
  currentQuestion = 0;
  score = 0;

  //Start the timer countdown
  countDownTimer = setInterval(function () {
    timer.textContent = secondsLeft + " seconds left";

    if (secondsLeft <= 0) {
      stopGame();
    }
    secondsLeft--;
  }, 1000);

  //hiding the last section and first section
  welcome.style.display = "none";
  results.style.display = "none";

  displayQuestion();
}

function viewHighScore() {
  //hide uneccessary stuff
  welcome.style.display = "none";
  quiz.style.display = "none";
}

//display question function

function displayQuestion() {
  //increiment the next question
  currentQuestionIndex++;


  //have we run out of questions?
  if (currentQuestionIndex >= questions.length) {
    stopGame();
    return;
  }



  //load question from the question array
  var question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.title;

  //clear any existing options from prev question

  option.innerHTML = "";

  //adding the button to 
for (i = 0; i < question.choices.length; i++ ) {

  createButton(question.choices[i]);
  
}

}

function createButton(text) {
  var button = document.createElement("button");
  button.textContent = text;
  option.appendChild(button);
  button.addEventListener("click", handleAnswerClick);
}

//
function handleAnswerClick(event) {
  var button = event.target;

  //what button was clicked
  var selectedAnswer = button.textContent;

  //what was the correct answer
  var currentQuestion = questions[currentQuestionIndex];

  var currentAnswer = currentQuestion.answer;

  //console.log(correctAnswer);

  //compare  selectred response to correct answer
  if (currentAnswer === selectedAnswer) {
    // - dispaly "correct"
    displayMessage("Correct!");

    //add point to score
    currentScore += 10;

    console.log(currentScore);

    setTimeout(function () {
      message.textContent = " ";
    }, 1000);
  } else {
    // - display "wrong"
    displayMessage("Wrong :(");

    //- deduct 10s from timer
    //TODO this isnt working
    //timer -= 10;

    //make the message go away after 1s
    setTimeout(function () {
      message.textContent = " ";
    }, 1000);
  }

  //TODO clear options for set question


  // TODO loading in next answers
  displayQuestion()
}

function displayMessage(responseMessage) {
  message.textContent = responseMessage;
}

startQuiz.addEventListener("click", startGame);
viewScores.addEventListener("click", viewHighScore);

