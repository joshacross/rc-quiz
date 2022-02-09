// quizQuestion = question

// inputs = choices

// Declarations
var quizSection = document.getElementById('quizSection');
var quizQuestion = document.getElementById('quizQuestion');
var successMessage = document.getElementById('successMessage');
var nameInput = document.getElementById('nameInput');
var directions = document.getElementById('directions');
var start = document.getElementsByClassName('start');
var choices = document.getElementById('choices');
var hidden = document.getElementsByName('hidden');

var questions = [
    {
        question: "When does your current lease end?",
        choices: [
            "End of the Month",
            "Next Month",
            "3-6 Months",
            "More than 6 months",
            "My Lease Has Already Ended"
        ],
        value: [
            5,
            4,
            3,
            2,
            1
        ]
    },
    {
        question: "What Is Your Estimated Credit Score?",
        choices: [
            "Excellent",
            "Good",
            "Fair",
            "Poor"
        ],
        value: [
            5,
            4,
            3,
            2
        ]
    },
    {
        question: "How Much Is The Total Down Payment You Would Be Willing To Put Down?",
        choices: [
            "0%",
            "3%",
            "10%",
            "20%"
        ],
        value: [
            1,
            2,
            3,
            4
        ]
    }
]

function startQuiz() {
    console.log("quiz started");

    var currentQuestionIndex = 0;

    // function displayQuestions () {

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

    choices.setAttribute(hidden, false);

        
    }

    // displayQuestions();

// Function for when the quiz is finished
function quizComplete() {
    // hide question container
    question.setAttribute("class", "hide");
    // show end quiz container
    successMessage.setAttribute("hidden", false);
}



document.getElementById('startQuiz').addEventListener("click", startQuiz);


// When I click startQuiz button >>
// Then I want to create Questions and choices with text content from an array to display on the screen with a next button.
// * When a choice is selected > I want to store the selected choice inside an empty choices variable and value inside of an empty value variable
// When user clicks next, I want to go to create make the next question in the array the current question
// Once all questions have been exhausted > I want to end question quiz and create a submission form with the information displayed from their choices
// with a confirmation, email, and consent to terms and service 

// Once clicked, It will submit data store to our database via webhook and show confirmation next steps

