const quizData = [
    {
        question:"What is the capital of India?",
        options: ["Delhi","Mumbai","Kolkata","chennai"],
        correctAnswer: "Delhi"
    },

    {
        question:"Which planet is known as the Red Planet?",
        options:["Venus","Mars","Jupiter","Saturn"],
        correctAnswer:"Mars"
    },

    {
        question:"What is the largest mammal in the world?",
        options:["Elephant","Blue Whale","Girraffe","Hippopotamus"],
        correctAnswer:"Blue Whale"
    }
]

const questionsContainer = document.getElementById('questions-container');
const resultContainer = document.getElementById("result-container");

function loadQuiz(){
    quizData.forEach((question,index) =>
    {
        const optionsHTML = question.options.map(option =>`
            <label>
                <input type = "radio" name = "question${index}" value = "${option}">
                ${option}
            </label>`).join("");

            questionsContainer.innerHTML +=`<div class = "question"> <p>${index+1}.${question.question}</p> 
            ${optionsHTML}</div>`;
    }
);
}

function submitQuiz(){
    const userAnswers = [];
    quizData.forEach((question,index) => 
    {
        const selectedOption = document.querySelector(`input[name = "question${index}"]:checked`);
        userAnswers.push(selectedOption ? selectedOption.value:null);

    });
    const correctAnswers = userAnswers.filter((answer,index) => answer === quizData[index].correctAnswer).length;
    resultContainer.innerHTML = `You got ${correctAnswers} out of ${quizData.length} correct!`;
}


loadQuiz();