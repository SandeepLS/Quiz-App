
// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];


//Initialize the Quiz State(Track the current question index and the user's score).
let currentQuestionIndex = 0;   
let score = 0;

function loadQuestion() {
    // Here we retrieve HTML Elements with Id.
    const questionElement = document.getElementById("question");
    const answerList = document.getElementById("answer-list");
    const nextButton = document.getElementById("next");

    // Hide the next button initially
    nextButton.style.display = "none";

    // Clear any existing answer options
    answerList.innerHTML = '';

    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];

    // Set the question text
    questionElement.textContent = currentQuestion.text;

    // Populate the answer options
    currentQuestion.options.forEach((option, index) => {
        const listItem = document.createElement("li");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "answer";
        radioInput.value = index;

        listItem.appendChild(radioInput);
        listItem.appendChild(document.createTextNode(option));
        answerList.appendChild(listItem);
    });
}

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    //Retrieve the Selected Option & Next Button.
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const nextButton = document.getElementById("next");

    if (selectedOption) {
        const answerValue = parseInt(selectedOption.value);

        // Check if the selected answer is correct
        if (answerValue === questions[currentQuestionIndex].correct) {
            selectedOption.parentElement.style.backgroundColor = "lightgreen";
            score++;
        } else {
            selectedOption.parentElement.style.backgroundColor = "lightcoral";

            const correctOptionIndex = questions[currentQuestionIndex].correct;
            const correctOption = document.querySelector(`input[name="answer"][value="${correctOptionIndex}"]`);
            correctOption.parentElement.style.backgroundColor = "lightgreen";
        }

        // Show the next button after submission
        nextButton.style.display = "inline-block";

        // Disable the submit button after an answer is selected
        // submitButton.disabled = true;
        submitButton.style.display = "none";
        } else {
            alert("Please select an answer before submitting.");
        }
});

const nextButton = document.getElementById("next");

nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();

        // Re-enable the submit button for the next question
        // submitButton.disabled = false;
        submitButton.style.display = "";
    } else {
        // Show the final score
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<h1>Your Score: ${score} / ${questions.length}</h1>`;
    }
});

loadQuestion();

