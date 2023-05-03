const questions = [
    {
        question: 'Which country won the first ever World Cup in 1930?',
        answers: [
            { text: 'Brazil', correct: false },
            { text: 'Italy', correct: false },
            { text: 'France', correct: false },
            { text: 'Uruguay', correct: true }
        ]
    },
    {
        question: 'Which outfield player appeared in the Champions League final in three different decades?',
        answers: [
            { text: 'Ryan Giggs', correct: true },
            { text: 'Lionel Messi', correct: false },
            { text: 'Frank Ribery', correct: false },
            { text: 'William Gallas', correct: false }
        ]
    },
    {
        question: 'Who holds the record for the most expensive player in football history?',
        answers: [
            { text: 'Neymar', correct: true },
            { text: 'Kylian Mbappe', correct: false },
            { text: 'Philippe Coutinho', correct: false },
            { text: 'Joao Felix', correct: false }
        ]
    },
    {
        question: 'Who has won the most EFL League 1 titles?',
        answers: [
            { text: 'Brighton', correct: false },
            { text: 'Luton Town', correct: false },
            { text: 'Wigan Athletic', correct: true },
            { text: 'Plymouth Argyle', correct: false }
        ]
    },
    {
        question: 'What team has been in the Northern Counties East League Division 1 for 32 Years?',
        answers: [
            { text: 'Rossington Main FC', correct: true },
            { text: 'Wakefield', correct: false },
            { text: 'Retford', correct: false },
            { text: 'Campion', correct: false }
        ]
    },
    {
        question: 'How many courts does Wimbledon have?',
        answers: [
            { text: '19', correct: true },
            { text: '20', correct: false },
            { text: '21', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'What is the name of the smaller roofed court at Wimbledon?',
        answers: [
            { text: 'Center Court', correct: false },
            { text: 'No.2 Court', correct: false },
            { text: 'No.1 Court', correct: true },
            { text: 'No.3 Court', correct: false }
        ]
    },
    {
        question: 'What is the name of the main court at the US Open?',
        answers: [
            { text: 'Louis Armstrong Stadium', correct: false },
            { text: 'Arthur Ashe Stadium', correct: true },
            { text: 'Grandstand', correct: false },
            { text: 'Main Court', correct: false }
        ]
    },
    {
        question: 'When was the Australian Open first held in tennis?',
        answers: [
            { text: '1896', correct: false },
            { text: '1905', correct: true },
            { text: '1910', correct: false },
            { text: '1913', correct: false }
        ]
    },
    {
        question: 'What is the name of the tournament held in Shanghai?',
        answers: [
            { text: 'Shanghai', correct: false },
            { text: 'The Shanghai Open', correct: false },
            { text: 'The Asian Open', correct: false },
            { text: 'The Shanghai Masters', correct: true }
        ]
    },
    {
        question: 'Which team has won the most IPL titles in cricket?',
        answers: [
            { text: 'Rajasthan Royals', correct: false },
            { text: 'Mumbai Indians', correct: true },
            { text: 'Gujarat Titans', correct: false },
            { text: 'Sunrisers Hyderabad', correct: false }
        ]
    },
    {
        question: 'In which city is the cricket ground Trent Bridge located?',
        answers: [
            { text: 'Manchester', correct: false },
            { text: 'Bristol', correct: false },
            { text: 'Nottingham', correct: true },
            { text: 'Middlesbrough', correct: false }
        ]
    },
    {
        question: 'Which county cricket team plays at the ground known as The Oval?',
        answers: [
            { text: 'Lancashire', correct: false },
            { text: 'Sussex', correct: false },
            { text: 'Middlesex', correct: false },
            { text: 'Surrey', correct: true }
        ]
    },
    {
        question: 'What is the maximum weight of a cricket ball?',
        answers: [
            { text: '5.5 ounces', correct: true },
            { text: '6 ounces', correct: false },
            { text: '6.5 ounces', correct: false },
            { text: '5 ounces', correct: false }
        ]
    },
    {
        question: 'How old was George Foreman when he became the oldest heavyweight champion?',
        answers: [
            { text: '43', correct: false },
            { text: '45', correct: true },
            { text: '47', correct: false },
            { text: '49', correct: false }
        ]
    },
    {
        question: 'Who was the first boxer to win more than $100 million in purses?',
        answers: [
            { text: 'Floyd Mayweather', correct: false },
            { text: 'Anthony Joshua', correct: false },
            { text: '“Sugar” Ray Leonard', correct: true },
            { text: 'Manny Pacquiao', correct: false }
        ]
    },
    {
        question: 'British female boxer Natasha Jonas hails from which British city?',
        answers: [
            { text: 'Liverpool', correct: true },
            { text: 'Manchester', correct: false },
            { text: 'London', correct: false },
            { text: 'Birmingham', correct: false }
        ]
    },
    {
        question: 'Which part of Evander Holyfield did Mike Tyson bite?',
        answers: [
            { text: 'Shoulder', correct: false },
            { text: 'Nose', correct: false },
            { text: 'Neck', correct: false },
            { text: 'Ear', correct: true }
        ]
    },
    {
        question: 'Who was Mike Tysons last opponent in professional boxing?',
        answers: [
            { text: 'Kevin McBride', correct: true },
            { text: 'Lennox Lewis', correct: false },
            { text: 'Danny Williams', correct: false },
            { text: 'Clifford Etienne', correct: false }
        ]
    },
    {
        question: 'Which super-middleweight fighter retired in 2008 with 46 wins, no draws, no defeats?',
        answers: [
            { text: 'Roy Jones', correct: false },
            { text: 'Sven Ottke', correct: false },
            { text: 'Floyd Mayweather', correct: false },
            { text: 'Joe Calzaghe', correct: true }
        ]
    }
];

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const endButton = document.getElementById('end-btn');
const restartButton = document.getElementById('restart-btn');
const questionAreaElement = document.getElementById('question-area');
const welcomeMsgElement = document.getElementById('welcome-msg');
const endMsgElement = document.getElementById('end-msg');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answers-btn');
const correctElement = document.getElementById('correct-txt');
const incorrectElement = document.getElementById('incorrect-txt');

let shuffleQuestion, currentQuestion;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
});
endButton.addEventListener('click', endQuiz);
restartButton.addEventListener('click', reloadGame);

function startGame() {
    startButton.classList.add('hidden');
    shuffleQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    questionAreaElement.classList.remove('hidden');
    welcomeMsgElement.classList.add('hidden');
    setNextQuestion();
}

function setNextQuestion() {
    resetQuestion();
    displayQuestion(shuffleQuestion[currentQuestion]);
    correctElement.classList.add('hidden');
    incorrectElement.classList.add('hidden');
}

function displayQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerElement.appendChild(button);
    });
}

function resetQuestion() {
    nextButton.classList.add('hidden');
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(sa) {
    const selectedButton = sa.target;
    const correct = selectedButton.correct;
    checkAnswer(document.body, correct);
    Array.from(answerElement.children).forEach(button => {
        checkAnswer(button, button.dataset.correct);
    });
    if (shuffleQuestion.length > currentQuestion + 1) {
        nextButton.classList.remove('hidden');
    } else {
        nextButton.classList.add('hidden');
        endButton.classList.remove('hidden');
    }
    if (correct) {
        correctElement.classList.remove('hidden');
    } else {
        incorrectElement.classList.remove('hidden');
    }
}

function checkAnswer(element, correct) {
    clearAnswer(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
    nextButton.classList.remove('hidden');
}

function clearAnswer(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function endQuiz() {
    endButton.classList.add('hidden');
    questionElement.classList.add('hidden');
    answerElement.classList.add('hidden');
    endMsgElement.classList.remove('hidden');
    restartButton.classList.remove('hidden');
}

function reloadGame() {
    window.location.reload();
}