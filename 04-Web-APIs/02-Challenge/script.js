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

var a = questions[0];
// Is similar to
var a = {
  title: "Commonly used data types DO NOT include:",
  choices: ["strings", "booleans", "alerts", "numbers"],
  answer: "alerts",
};
a.answer;

var highscores = document.getElementById("highscores");

var startQuiz = document.getElementById("startQuiz");
var question = document.getElementById("question");
var option = document.getElementById("option");
var message = document.getElementById("message");

var results = document.getElementById("results");
var viewScores = document.getElementById("viewScores");
var welcome = document.getElementById("welcome");

var timer = document.getElementById("timer");

var secondsLeft = 0;
//going to be between 0 and 4 if you have 4 questions
var score = 0;
//TODO current question is important: when you answer it you need to incriment that and go and retrieve the next question from the file
var currentQuestionIndex = 0;
var countDownTimer;

function stopGame() {
  clearInterval(countDownTimer);
}

function startGame() {
  //set variables to 0 because game has started timer is set to 60 seconds

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
  currentQuestion++;
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

  //load through the choices and output the new possible options by creating a div that contains the text/question
  //For loop that for each question creates a div containing
  // could create the elements as buttons

  // for (i = 0; i < questions.length; i++) {
  //   console.log("hello", i )
  // }

  //adding the button to HTML 
  createButton(question.choices[0]);
  createButton(question.choices[1]);
  createButton(question.choices[2]);
  createButton(question.choices[3]);

  var questionDiv = document.createElement("div");
  questionDiv.textContent = currentQuestionIndex;
  //TODO I am stuck here

  //append those into the display (create div append )
}

function selectAnswer() {}

function createButton(text) {
  var button = document.createElement("button");
  button.textContent = text;
  option.appendChild(button);
  button.addEventListener("click", handleAnswerClick);
}

function handleAnswerClick(event) {
  var button = event.target;

  //what button was clicked
  var selectedAnswer = button.textContent;

  //what was the correct answer
  var currentQuestion = questions[currentQuestionIndex];
  // currentQuestion = {
  //  title: "Commonly used data types DO NOT include:",
  //  choices: ["strings", "booleans", "alerts", "numbers"],
  //  answer: "alerts",
  // }
  var currentAnswer = currentQuestion.answer;

  console.log(correctAnswer);

  //compare  selectred response to correct answer
  if (currentAnswer === selectedAnswer) {
    
    score++;

    displayMessage("Correct!");
  } else {
    displayMessage("Wrong :(");

    timer - 10;

    //make the message go away after 1s
  }

  //if correct
  // - dispaly "correct"
  // - add point to score

  //else
  // - display "wrong"
  //- deduct 10s from timer

  //move onto next question

  
}

function displayMessage(message) {
  message.textContent = message;
}

startQuiz.addEventListener("click", startGame);
viewScores.addEventListener("click", viewHighScore);
