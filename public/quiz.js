const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10"],
        answer: "8"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu"],
        answer: "Au"
    },
    {
        question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?",
        options: ["10", "11", "13"],
        answer: "13"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra"],
        answer: "Canberra"
    },
    // Add more questions as needed
];



let currentQuestionIndex = 0;
let score = 0;

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = questions[index];
    questionContainer.innerHTML = `
    <div class="question bg-white p-3 border-bottom">
    <div class="d-flex flex-row align-items-center question-title">
        <h3 class="text-danger">Q.</h3>
        <h5 class="mt-1 ml-2">${question.question}</h5>
        </div>
        <div class="ans ml-2">
            ${question.options.map((option, i) => `
                <label class="radio">
                    <input type="radio" name="q${index}" value="${option}"> <span>${option}</span>
                </label>
                </div><div class="ans ml-2">
            `).join('')}
            </div>
        </div>
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('submit-btn').style.display = 'block';
        }
        if (currentQuestionIndex > 0) {
            document.getElementById('prev-btn').style.display = 'block';
        }
    } else {
        alert('Please select an option.');
    }
}

function prevQuestion() {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    if (currentQuestionIndex === 0) {
        document.getElementById('prev-btn').style.display = 'none';
    }
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
}


// Initialize quiz
showQuestion(currentQuestionIndex);
