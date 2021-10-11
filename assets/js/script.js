
//global Vars
var btnContinueEl = document.getElementById("btn-content");
var questionListEl = document.getElementById("question-list");
var answerIndicatorEl = document.getElementById("answer-indicator");
var answerIndicatorWrapperEl = document.getElementById("answer-indicator-wrapper");

var timerEl = document.getElementById("timer");
var timeLeft = 30;
var over = false;

var highScore = localStorage.getItem("currentHighScore");
var initials = localStorage.getItem("highScoreHolder");


var questionEl = document.createElement("li");
var questAnswer1 = document.createElement("button");
var questAnswer2 = document.createElement("button");
var questAnswer3 = document.createElement("button");
var questAnswer4 = document.createElement("button");

var prevQuestionEl = document.createElement("li");
var prevAnswer1 = document.createElement("button");
var prevAnswer2 = document.createElement("button");
var prevAnswer3 = document.createElement("button");
var prevAnswer4 = document.createElement("button");

var score = 0;
var i = 0;

//object questions
var question1 = {
    question: "What language is a mark up langauge?",

    answer1: { opt: "JavaScript", correct: false},
    answer2: { opt: "C++", correct: false},
    answer3: { opt: "HTML", correct: true},
    answer4: { opt: "Java", correct: false}

};

var question2 = {
    question: "How do you select an element by class in CSS?",

    answer1: { opt: ".class", correct: true},
    answer2: { opt: "#class", correct: false},
    answer3: { opt: "class", correct: false},
    answer4: { opt: "-class", correct: false}

};

var question3 = {
    question: "Which option is not falsy",

    answer1: { opt: "'0'", correct: false},
    answer2: { opt: "10", correct: true},
    answer3: { opt: "null", correct: false},
    answer4: { opt: "false", correct: false}
};


var question4 = {
    question: "What is the type? '100'",

    answer1: { opt: "string", correct: true},
    answer2: { opt: "array", correct: false},
    answer3: { opt: "integer", correct: false},
    answer4: { opt: "boolean", correct: false}

};

var question5 = {
    question: "What object keyword do you use while in javascript to manipulate HTML?",

    answer1: { opt: "htmlObj", correct: false},
    answer2: { opt: "%class", correct: false},
    answer3: { opt: "DOM", correct: false},
    answer4: { opt: "document", correct: true}

};

var question6 = {
    question: "What third-party API helps with time and dates",

    answer1: { opt: "JQuery", correct: false},
    answer2: { opt: "Moment.js", correct: true},
    answer3: { opt: "Bootstrap", correct: false},
    answer4: { opt: "Js.min", correct: false}

};
//array of questions
var questions = [question1, question2, question3, question4, question5, question6]

document.getElementById("btn-continue").addEventListener("click", displayQuestion);
document.getElementById("btn-continue").addEventListener("click", countDown);

//for viewing highscore.
document.getElementById("high-score").addEventListener("click", function() {
    window.alert("highscore: " + highScore + " held by " + initials);
})

// displays the current question being asked.
function displayQuestion() {
       
        btnContinueEl.style.display = "none";
        
        questionEl.innerHTML = questions[i].question;
        questionEl.setAttribute("style", " listStyleType:none; display:block; margin-bottom: 25px; margin-top: 20px; background-color:beige; margin: 40px; padding-bottom:10px; padding-top:10px ");
    
        questAnswer1.innerHTML = questions[i].answer1.opt;
        questAnswer2.innerHTML = questions[i].answer2.opt;
        questAnswer3.innerHTML = questions[i].answer3.opt;
        questAnswer4.innerHTML = questions[i].answer4.opt;
    
        questAnswer1.setAttribute("style", " listStyleType:none; margin:5px; display:block; background-color: beige; width: 100px; height:30px; border:none; border-radius:4px; margin-left:20px ");
        questAnswer2.setAttribute("style", " listStyleType:none; margin:5px; display:block; background-color: beige; width: 100px; height:30px; border:none; border-radius:4px; margin-left:20px ");
        questAnswer3.setAttribute("style", " listStyleType:none; margin:5px; display:block; background-color: beige; width: 100px; height:30px; border:none; border-radius:4px; margin-left:20px ");
        questAnswer4.setAttribute("style", " listStyleType:none; margin:5px; display:block; background-color: beige; width: 100px; height:30px; border:none; border-radius:4px; margin-left:20px ");

        questionListEl.appendChild(questionEl);
        questionListEl.appendChild(questAnswer1);
        questionListEl.appendChild(questAnswer2);   
        questionListEl.appendChild(questAnswer3);
        questionListEl.appendChild(questAnswer4);
        
        if (i>0) {
            prevQuestionEl.innerHTML = questions[i-1].question;
            prevAnswer1.innerHTML = questions[i-1].answer1.opt;
            prevAnswer2.innerHTML = questions[i-1].answer1.opt;
            prevAnswer3.innerHTML = questions[i-1].answer1.opt;
            prevAnswer4.innerHTML = questions[i-1].answer1.opt;

            questionListEl.replaceChild(questionEl, prevQuestionEl);
            questionListEl.replaceChild(questAnswer1, prevAnswer1);
            questionListEl.replaceChild(questAnswer2, prevAnswer2);   
            questionListEl.replaceChild(questAnswer3, prevAnswer3);
            questionListEl.replaceChild(questAnswer4, prevAnswer4);
        } 
        checkAnswers();
        

  
}

// grabs the ansers and submits for check
function checkAnswers() {
    questAnswer1.addEventListener("click", function(){
        var choice = questions[i].answer1.correct;
        rewardOrPunish(choice);
    });
    questAnswer2.addEventListener("click", function(){
        var choice = questions[i].answer2.correct;
        rewardOrPunish(choice);
    });
    questAnswer3.addEventListener("click", function(){
        var choice = questions[i].answer3.correct;
        rewardOrPunish(choice);
    });
    questAnswer4.addEventListener("click", function(){
        var choice = questions[i].answer4.correct;
        rewardOrPunish(choice);
        
    });
}

//determines if the user gets points or loses time
function rewardOrPunish(choice){
    if(choice){
        score = score + 10;
        answerIndicatorWrapperEl.style.display = "flex";
        answerIndicatorEl.style.display = "block";
        answerIndicatorEl.innerHTML = "Correct!";
        i++
        if (i === questions.length) {
            quizOver();
        }
        displayQuestion();
    } else{
        timeLeft = timeLeft - 5;
        answerIndicatorWrapperEl.style.display = "flex";
        answerIndicatorEl.style.display = "block";
        answerIndicatorEl.innerHTML = "Wrong!";
        i++
        if (i === questions.length) {
            quizOver();
        }
        displayQuestion();
    }
}

//begins count down
function countDown(){
    
    var timeInterval = setInterval(function() {
      
        if(over){
            clearInterval(timeInterval);
            timeLeft = "--";
            timerEl.innerHTML = timeLeft;
        } else if (timeLeft >= 0) {
            timerEl.innerHTML = timeLeft + "s";
            timeLeft--;
        }else {
            timerEl.innerHTML = " ";
            clearInterval(timeInterval);
            window.alert("TIME IS UP!");
            quizOver();
        }
        
    }, 1000)
}

// runs when the quiz is over
function quizOver() {
    over = true;

    if(score > highScore){
        initials = window.prompt("please enter your initials to save your score as high score!");
        highScore = score;
        localStorage.setItem("highScoreHolder", initials);
        localStorage.setItem("currentHighScore", highScore);
        window.alert("Congrats! your score is the new high score! Goodbye!");
    } else if (score <= highScore){
        window.alert("Sorry! Your score isnt the new high score! Goodbye");
    }
    
}






