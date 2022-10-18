//var highscores = document.getElementById("highscores")

var startQuiz = document.getElementById('startQuiz')
var question = document.getElementById('question')
var option = document.getElementById('option')
var message = document.getElementById('message')

//var results = document.getElementById("results")
var viewScores = document.getElementById("viewScores")
//var welcome = document.getElementById("welcome")

var timer = document.getElementById("timer")



var secondsLeft = 0;
//going to be between 0 and 4 if you have 4 questions 
var score = 0;
//TODO current question is important: when you answer it you need to incriment that and go and retrieve the next question from the file 
var currentQuestion = 0;
var countDownTimer ;


function stopGame() {
    clearInterval(countDownTimer);
}

function startGame() {

    

    //set variables to 0 because game has started 
    
    secondsLeft = 60;
    currentQuestion = 0;
    score = 0;

    //Start the timer countdown 
    countDownTimer = setInterval(function() {
        
     timer.textContent = countDownTimer + " seconds left"
        
        secondsLeft--;
        
        if (secondsLeft <= 0) {
            stopGame()
        }


    }, 1000);

    //hiding the last section and first section 
    welcome.style.display = 'none';
    results.style.display = "none";

    
     

    


    

 
}


function viewHighScore () {


}



function displayQuestion() {

    //increiment the next question

    //have we run out of questions?

    //load question from the question array

    //clear any existing options from prev question

    //load through the choices and output the new possible options 

    //append those into the display (create div append ) 

}









startQuiz.addEventListener("click", startGame);
viewScores.addEventListener("click", viewHighScore);