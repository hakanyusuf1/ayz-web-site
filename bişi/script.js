const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')


const shuffle

startButton.addEventListener('click',startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random()- ,5)
    questionContainerElement.classList

}

function setNextQuestion() {
    
}

function selectAnswer() {
    
}

const question =[
    {
        question: 'What is 2 + 2',
        answers:[
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]