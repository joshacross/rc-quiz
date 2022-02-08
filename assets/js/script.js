// quizQuestion = question

// inputs = choices

// Declarations
var quizSection = document.getElementById('quizSection');
var quizQuestion = document.getElementById('quizQuestion');
var successMessage = document.getElementById('successMessage');
var nameInput = document.getElementById('nameInput');
var directions = document.getElementById('directions');
var start = document.getElementsByClassName('start');

hideElements = function() {
    console.log("objects-hidden")
choices.setAttribute("hidden", true);
successMessage.setAttribute("hidden", true);
};

hideElements();

function startQuiz() {
    console.log("quiz started");
    var currentQuestionIndex = 0;


    var questions = [
        {
            question: "Would You Like To Own Your Own Home?",
            choices: [
                "Yes",
                "No"
            ],
            answer: ""
        },
        {
            question: "What Is Your Estimated Credit Score?",
            choices: [
                "Excellent",
                "Good",
                "Fair",
                "Poor"
            ],
            answer: ""
        },
        {
            question: "What symbol indicates a tag?",
            choices: [
                "Angled brackets (<>)",
                "Cureved brackets ({})",
                "Comma (,)",
                "Exclamation Mark:  (!)"
            ],
            answer: "Angled brackets (<>)"
        },
        {
            question: "Which of these is a genuine tag keyword",
            choices: [
                "Header",
                "Bold",
                "Body",
                "Image"
            ],
            answer: "Body"
        },
        {
            question: "(T/F) A CSS file can be applied to only one HTML file",
            choices: [
                "True",
                "False"
            ],
            answer: "False"
        },
        {
            question: "What is the corect tag for a line break in HTML",
            choices: [
                "<brk />",
                "<line />",
                "<bk />",
                "<br />"
            ],
            answer: "<br />"
        },
        {
            question: "What does CSS stand for?",
            choices: [
                "Computing Style Sheet",
                "Creative Style System",
                "Cascading Style Sheet",
                "Creative Styling Sheet"
            ],
            answer: "Cascading Style Sheet"
        },
        {
            question: "Where should a CSS file be referenced in a HTML file?",
            choices: [
                "Before any HTML code",
                "After all HTML code",
                "Inside the head section",
                "Inside the body section"
            ],
            answer: "Inside the head section"
        },
        {
            question: "What is the correct format for aligning written content to the center of the page in CSS?",
            choices: [
                "Text-align: center",
                "Font-align: center",
                "Text: align-center",
                "Font: align-center"
            ],
            answer: "Text-align: center"
        },
        {
            question: "What is the correct format for a Div?",
            choices: [
                "Div",
                "<Div>",
                "<Div />",
                "<Div></Div>"
            ],
            answer: "<Div></Div>"
        },
    ]

    var currentQuestion = {};



        // Find question from array of questions
    var currentQuestion = questions[currentQuestionIndex];
        // Fill in question and answer choices
    var titleEl = quizQuestion;
        titleEl.textContent = currentQuestion.question;
        choices.innerHTML = "";

    var clickChoiceButton = "";        
        // Run through questions
        currentQuestion.choices.forEach(function(choice, i) {
            var choiceEl = document.createElement("button");
            choiceEl.setAttribute("class", "choice-btn");
            choiceEl.setAttribute("value", choice);
            choiceEl.textContent = i + 1 + ". " + choice;
            // Make new choice buttons click listenter
            choiceEl.onclick = clickChoiceButton;
            // Append choice so it displays on page
            choices.appendChild(choiceEl);
        });
}

// Function for when the quiz is finished
function quizComplete() {
    // hide question container
    question.setAttribute("class", "hide");
    // show end quiz container
    successMessage.setAttribute("hidden", false);
}



document.getElementById('startQuiz').addEventListener("click", startQuiz);
