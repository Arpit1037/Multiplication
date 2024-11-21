let score = 0;
let correctAnswer;
let gameStarted = false;

const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submitBtn');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const resetButton = document.getElementById('resetBtn');
const startButton = document.getElementById('startBtn');
const gameContent = document.getElementById('gameContent');
const instructions = document.getElementById('instructions');
const congratulations = document.getElementById('congratulations');
const questionElement = document.getElementById('question');

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    questionElement.textContent = `What is ${num1} x ${num2}?`;
}

startButton.addEventListener('click', () => {
    gameStarted = true;
    instructions.style.display = 'none';
    gameContent.style.display = 'block';
    score = 0;
    scoreElement.textContent = score;
    congratulations.style.display = 'none';
    generateQuestion();
});

submitButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value);

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
        score++;
    } else {
        feedbackElement.textContent = 'Incorrect!';
        feedbackElement.style.color = 'red';
        score--;
    }

    scoreElement.textContent = score;

    if (score >= 10) {
        congratulations.textContent = 'Congratulations, you won the game!';
        congratulations.style.display = 'block';
        submitButton.style.display = 'none';
        resetButton.style.display = 'block';
    } else {
        generateQuestion();
        answerInput.value = '';
        resetButton.style.display = 'none';
        submitButton.style.display = 'block';
    }
});

resetButton.addEventListener('click', () => {
    score = 0;
    scoreElement.textContent = score;
    feedbackElement.textContent = '';
    congratulations.style.display = 'none';
    resetButton.style.display = 'none';
    submitButton.style.display = 'block';
    generateQuestion();
    answerInput.value = '';
});