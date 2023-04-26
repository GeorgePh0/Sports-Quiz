const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionAreaElement = document.getElementById('question-area');
const welcomeMsgElement = document.getElementById('welcome-msg');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answers-btn');

let shuffleQuestion, currentQuestion;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
});

function startGame() {
    console.log('Start Quiz');
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


const questions = [
    {
        question: 'How many teams have won the Premier League?',
        answers: [
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: true },
            { text: '8', correct: false }
        ]
    },
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
        question: 'English rock star Elton John was twice the owner of which football club?',
        answers: [
            { text: 'Burnley', correct: false },
            { text: 'Cardiff', correct: false },
            { text: 'Watford', correct: true },
            { text: 'Brentford', correct: false }
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
        question: 'In what league is the concept of a "Designated Player" a feature?',
        answers: [
            { text: 'Liga MX', correct: false },
            { text: 'MLS', correct: true },
            { text: 'Super Lig', correct: false },
            { text: 'Cypriot First Division', correct: false }
        ]
    },
    {
        question: 'Which club is associated with Galacticos?',
        answers: [
            { text: 'Rayo Vallecano', correct: false },
            { text: 'Real Sociedad', correct: false },
            { text: 'Barcelona', correct: false },
            { text: 'Real Madrid', correct: true }
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
        question: 'Who scored the fastest hat-trick in the history of Ligue 2?',
        answers: [
            { text: 'Tino Kadewere', correct: false },
            { text: 'Angelo Fulgini', correct: true },
            { text: 'Rhys Healey', correct: false },
            { text: 'Olivier Giroud', correct: false }
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
        question: 'How many Grand Slam tournaments are there in tennis?',
        answers: [
            { text: '7', correct: false },
            { text: '6', correct: false },
            { text: '5', correct: false },
            { text: '4', correct: true }
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
        question: 'What is the French Open surface?',
        answers: [
            { text: 'Artificial Grass', correct: false },
            { text: 'Hard', correct: false },
            { text: 'Grass', correct: false },
            { text: 'Clay', correct: true }
        ]
    },
    {
        question: 'When was the French Open first held?',
        answers: [
            { text: '1878', correct: false },
            { text: '1891', correct: true },
            { text: '1895', correct: false },
            { text: '1898', correct: false }
        ]
    },
    {
        question: 'What is the Australian Open also known as?',
        answers: [
            { text: 'Mega Slam', correct: false },
            { text: 'Australian Slam', correct: false },
            { text: 'Happy Slam', correct: true },
            { text: 'Best Slam', correct: false }
        ]
    },
    {
        question: 'Who has won the most Australian Open titles?',
        answers: [
            { text: 'Novak Djokovic', correct: true },
            { text: 'Roger Federer', correct: false },
            { text: 'Jack Crawford', correct: false },
            { text: 'Roy Emerson', correct: false }
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
        question: 'What year was the first IPL season held in cricket?',
        answers: [
            { text: '2002', correct: false },
            { text: '2004', correct: false },
            { text: '2006', correct: false },
            { text: '2008', correct: true }
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
        question: 'What is the length of a cricket pitch?',
        answers: [
            { text: '20 Yards', correct: false },
            { text: '22 Yards', correct: true },
            { text: '24 Yards', correct: false },
            { text: '26 Yards', correct: false }
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
        question: 'What is the height of the cricket stumps?',
        answers: [
            { text: '30 incehs', correct: false },
            { text: '26 inches', correct: false },
            { text: '28 inches', correct: true },
            { text: '32 inches', correct: false }
        ]
    },
    {
        question: 'What is the minimum number of overs that must be bowled in a Test match in a day?',
        answers: [
            { text: '80', correct: false },
            { text: '90', correct: true },
            { text: '100', correct: false },
            { text: '110', correct: false }
        ]
    },
    {
        question: 'How many fielders are allowed outside the 30-yard circle in a limited-overs cricket match?',
        answers: [
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: false }
        ]
    },
    {
        question: 'What does T20 stand for?',
        answers: [
            { text: 'Two20', correct: false },
            { text: 'Tea20', correct: false },
            { text: 'Twenty20', correct: true },
            { text: 'Touch20', correct: false }
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
        question: 'How old was Amir Khan when he won silver at the Athens 2004 Olympics?',
        answers: [
            { text: '16', correct: false },
            { text: '17', correct: true },
            { text: '18', correct: false },
            { text: '19', correct: false }
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
        question: 'What is the nickname of Tyson Fury?',
        answers: [
            { text: 'Gypsy', correct: false },
            { text: 'The Gypsy King', correct: true },
            { text: 'Fury Fire', correct: false },
            { text: 'Big Tyson', correct: false }
        ]
    },
    {
        question: 'How many times has Anthony Joshua fought outside of the UK?',
        answers: [
            { text: '0', correct: false },
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false }
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
    },
    {
        question: 'In which year was Floyd Mayweathers last professional fight prior to his comeback showdown with Conor McGregor?',
        answers: [
            { text: '2013', correct: false },
            { text: '2014', correct: false },
            { text: '2015', correct: true },
            { text: '2016', correct: false }
        ]
    }
];