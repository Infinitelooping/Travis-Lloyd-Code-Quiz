
var btnContinueEl = document.getElementById("btn-content");
var questionListEl = document.getElementById("question-list");

var questionEl = document.createElement("li")
var questAnswer1 = document.createElement("button");
var questAnswer2 = document.createElement("button");
var questAnswer3 = document.createElement("button");
var questAnswer4 = document.createElement("button");

var score = 0;
var i = 0;


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
var questions = [question1, question2, question3, question4, question5, question6]

document.getElementById("btn-continue").addEventListener("click", displayQuestion);

function displayQuestion() {
        btnContinueEl.style.display = "none";
    
        questionEl.innerHTML = questions[i].question;
        questionEl.setAttribute("style", " listStyleType:none; display:block; margin-bottom: 25px; margin-top: 20px; background-color:beige; margin: 40px ");
    
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
        
        checkAnswers();
        

  
}


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

function rewardOrPunish(choice){
    if(choice){
        score = score + 10;
        console.log("is true!");
        console.log(i);
        i++
        displayQuestion();
    } else{
        console.log("is false!:(");
        i++
        console.log(i);
        displayQuestion();
        //subract time and display next question
    }
    
}


