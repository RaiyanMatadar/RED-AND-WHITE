const quizData = [{
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Django"],
        correct: 3
    }
];

let displayQuestion = document.getElementById("display-question");
let QIndex = 0; // question index 
let totalMarks = 0;

// it will print question on the h1 (display-question)
function loadQuestion() {
    let display = quizData[QIndex].question;
    displayQuestion.innerHTML = `${display}`
}
loadQuestion()

//# showing options on the page 

// optionIndex variable select the options index for each object in quizData 
let option = document.querySelectorAll('.option');
let optionIndex = 0;

function displayOptions() {
    option.forEach(element => {
        element.innerHTML = `${quizData[QIndex].options[optionIndex]}`
        optionIndex++
    });
    optionIndex = 0
}
displayOptions()

let selectedOption = null;

function selectOption(current) {

    // this will remove the privious classes 
    option.forEach(removeClass => {
        removeClass.classList.remove("selected")
    })

    option[current].classList.add("selected");

    selectedOption = current;
    console.log(current);
}

// # next btn will show an new MCQ quesiton 
function changePage() {

    if (selectedOption === null) {
        alert("Select an option first");
        return;
    }

    if (selectedOption === quizData[QIndex].correct) {
        totalMarks++;
    }

    QIndex++;
    selectedOption = null;

    if (QIndex >= quizData.length) {
        showResult();
        return;
    }

    loadQuestion();
    displayOptions();

    // removing green colour for the next question 
    option.forEach(removeClass => {
        removeClass.classList.remove("selected")
    })
}

function showResult() {
    // it will hide the quiz when the last page appear  
    document.getElementById("quiz").style.display = "none";
    // it will show the pie chart section when the last page appear 
    document.getElementById("result").style.display = "block";

    // pie chart for showing finalScore on the last page 
    let circle = document.getElementById("circle");

    let right = totalMarks;
    let total = quizData.length;
    let rightPercent = (right / total) * 100;

    circle.style.background = `
        conic-gradient(
          green 0% ${rightPercent}%,
          red ${rightPercent}% 100%
        )
    `;

    // showing rightPercent inside the circle 
    circle.innerText = `${Math.round(rightPercent)}%`;

    document.getElementById("final-score").innerText =
        `You scored ${right} out of ${total}`;
}