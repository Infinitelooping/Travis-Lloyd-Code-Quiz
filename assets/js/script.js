
var btnContinueEl = document.getElementById("btn-content");
var questionListEl = document.getElementById("question-list");

var question1El = document.createElement("li")
var questAnswer1 = document.createElement("button");
var questAnswer2 = document.createElement("button");
var questAnswer3 = document.createElement("button");
var questAnswer4 = document.createElement("button");


var question1 = {
    question: "What language is a mark up langauge?",

    answer1: { opt: "JavaScript", correct: false},
    answer2: { opt: "C++", correct: false},
    answer3: { opt: "HTML", correct: true},
    answer4: { opt: "Java", corret: false}

};

var question2 = {
    question: "How do you select a and element by class in CSS?",

    answer1: { opt: ".class", correct: true},
    answer2: { opt: "#class", correct: false},
    answer3: { opt: "class", correct: false},
    answer4: { opt: "-class", corret: false}

};


var question3 = {
    question: "which option is not falsy",

    answer1: "0",
    answer2: "10",
    answer3: "null",
    answer4: "false",

    answer1: { opt: "'0'", correct: false},
    answer2: { opt: "10", correct: true},
    answer3: { opt: "null", correct: false},
    answer4: { opt: "false", corret: false}
};


// var question1 = {
//     question: "What language is a mark up langauge?",

//     answer1: "JavaScript",
//     answer2: "C++",
//     answer3: "HTML",
//     answer4: "Java",

//     correctAnswer: question1.answer3

// };
var questions = [question1, question2, question3]

for (i=0;i<questions.length;i++){
    console.log(questions[i]);
};

document.getElementById("btn-continue").addEventListener("click", displayQuestion);

function displayQuestion(evt) {
    evt.preventDefault();

    btnContinueEl.style.display = "none";

    question1El.innerHTML = questions[0].question;
    question1El.setAttribute("style", " listStyleType:none; margin:5px; display:block ");

    questAnswer1.innerHTML = questions[0].answer1.opt;
    questAnswer2.innerHTML = questions[0].answer2.opt;
    questAnswer3.innerHTML = questions[0].answer3.opt;
    questAnswer4.innerHTML = questions[0].answer4.opt;

    questAnswer1.setAttribute("style", " listStyleType:none; margin:5px; display:block ");
    questAnswer2.setAttribute("style", " listStyleType:none; margin:5px; display:block ");
    questAnswer3.setAttribute("style", " listStyleType:none; margin:5px; display:block ");
    questAnswer4.setAttribute("style", " listStyleType:none; margin:5px; display:block ");

    questionListEl.appendChild(question1El);
    questionListEl.appendChild(questAnswer1);
    questionListEl.appendChild(questAnswer2);   
    questionListEl.appendChild(questAnswer3);
    questionListEl.appendChild(questAnswer4);    
}