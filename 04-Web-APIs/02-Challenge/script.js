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

var highScores = document.getElementById("highScores");
var highScoreList = document.getElementById("highScoreList");

var startQuiz = document.getElementById("startQuiz");
var currentScore = document.getElementById("currentScore");
var question = document.getElementById("question");
var option = document.getElementById("option");
var message = document.getElementById("message");

var results = document.getElementById("results");
var viewScores = document.getElementById("viewScores");
var submit = document.getElementById("submit");
var welcome = document.getElementById("welcome");
var initials = document.getElementById("initials");
var finalScore = document.getElementById("finalScore")
var playAgain = document.getElementById("playAgain")

var timer = document.getElementById("timer");

//Setting variables to 0 for start
var secondsLeft = 0;
var currentScore = 0;
var currentQuestionIndex = 0;
var countDownTimer;
results.style.display = "none";
highScoreList.style.display = "none";

//clear coundown timer to stop game
function stopGame() {
  clearInterval(countDownTimer);

  timer.textContent = "";

  quiz.style.display = "none";
  welcome.style.display = "none";
  results.style.display = "";

  finalScore.textContent = currentScore


}

function updateTimer() {
  timer.textContent = secondsLeft + " seconds left";

  if (secondsLeft <= 0) {
    stopGame();
  }
}

//Function to begin the game
function startGame() {
  secondsLeft = 60;
  currentQuestionIndex = 0;
  score = 0;
  

  //Start the timer countdown
  updateTimer();
  countDownTimer = setInterval(function () {
    secondsLeft--;
    updateTimer();
  }, 1000);

  //hiding the last section and first section
  welcome.style.display = "none";
  results.style.display = "none";
  quiz.style.display = "";

  displayQuestion();
}

function viewHighScore() {
  //hide uneccessary stuff
  welcome.style.display = "none";
  quiz.style.display = "none";
  console.log("hiding quiz from view highscore");
}

//display question function

function displayQuestion() {
  //have we run out of questions?
  if (currentQuestionIndex >= questions.length) {
    stopGame();
    return;
  }

  //load question from the question array
  var question = questions[currentQuestionIndex];
  document.getElementById("question").textContent =
    currentQuestionIndex + 1 + ". " + question.title;

  //clear any existing options from prev question

  option.innerHTML = "";

  //adding the button to
  for (i = 0; i < question.choices.length; i++) {
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
    secondsLeft -= 10;

    if (secondsLeft < 0) {
      secondsLeft = 0;
    }

    updateTimer();

    //make the message go away after 1s
    setTimeout(function () {
      message.textContent = " ";
    }, 1000);
  }

  //increiment the next question
  currentQuestionIndex++;

  //loading in next answers and question
  displayQuestion();
}

//create a function to save the results

function displayMessage(responseMessage) {
  message.textContent = responseMessage;
}

function saveScore() {
  //get the name and save into a variable
  var initial = initials.value;
  console.log(initial);
  console.log(currentScore);

  // create an empty array for scores
  var scores = [];

  // retrieves the scores from local storage
  var existingScoresJson = localStorage.getItem("score");

  if (existingScoresJson !== null) {
    scores = JSON.parse(existingScoresJson);
  }

  scores.push({
    name: initial,
    score: currentScore,
  });

  var stringy = JSON.stringify(scores);

  // save the JSON string of score to local storage under key score
  localStorage.setItem("score", stringy);

  getHighScores();
}

function getHighScores() {
  //clear ui
  highScoreList.innerHTML = "";

  //display new score
  var score = JSON.parse(localStorage.getItem("score"));
  console.log(typeof score);
  console.log(score); 

  var sortedScores = score.sort((a, b) => b.score - a.score);
  console.log(sortedScores);

  //TODO save top 5 scores to local storage 
  //this is partly working but just returning object object...s 

  sortedScores.splice(5);
  console.log("topScores: " + sortedScores);
  var sortedScoresJSON = JSON.stringify("sortedScore", sortedScores);
  console.log("JSON scores" + sortedScoresJSON);

  //TODO get fucntion to grab highscores from local storage

  console.log(JSON.parse(localStorage.getItem("score")));


  //TODO put the top 5 scores into the highscore section (.map?)

  var listItem = document.createElement("li");
  highScoreList.appendChild(listItem);
  highScoreList.style.display = "";


}

startQuiz.addEventListener("click", startGame);
highScores.addEventListener("click", getHighScores);
submit.addEventListener("click", saveScore);
