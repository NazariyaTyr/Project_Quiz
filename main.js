const question = [
    {
        question: 'What is the freezing point of water?',
        options: ['-5', '-6', '0', '1'],
        answer: '0'
    },
    {
        question: 'How many planets are in the solar system?',
        options: ['8', '9', '7', '10'],
        answer: '8'

    },
    {
        question: 'What is the longest river in the world?',
        options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
        answer: 'Amazon'
    },
    {
        question: 'How many chromosomes are in the human genome?',
        options: ['42', '23', '44', '46'],
        answer: '46'
    },
    {
        question: 'What is the capital of Canada?',
        options: ['Toronto', 'Ottawa', 'Vancouver', 'Athens'],
        answer: 'Ottawa'
    }


]

let score = 0;
let question_Index = 0;

const Question = document.querySelector('#Question');
const Answer = document.querySelector('#Answers');
const TitleText = document.querySelector('#Title');
const submBut = document.querySelector('#Submit')
const timer = document.querySelector('#timer')
const blocktime = document.querySelector('#time')
const questionTime = 10;

let count = 10;
let selectedAnswer;
let selectedAnswerText;
let TIMER;


function createPage() {
    clearPage();
    startPage()
}

function Quiz() {
    score = 0;
    question_Index = 0;

    clearPage();
    showContainer();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
    //checkAnswer();
}

function startPage() {
    TitleText.innerHTML = 'Let\'s start'
    Question.innerHTML = 'Test your knowledge'
    Answer.innerHTML = ''
    submBut.innerHTML = '<button class="start" id="Start" onclick="Quiz()" >Start</button>'
}

////////////////////////////////////////////////////////////////////////////////////////
function renderCounter() {
    if (count >= 0) {
        blocktime.innerHTML = count;
        count--;
    } else {

        count = 10;
        blocktime.innerHTML = count;

        if (question_Index + 1 !== question.length) {
            question_Index++
            clearPage()
            showContainer()
        } else {
            clearPage()
            showResults()
        }

    }
}

//////////////////////////////////////////////////

Answer.addEventListener('click', e => {
    selectedAnswerText = e.target.innerText
    selectedAnswer = e.target
    if (selectedAnswer.className === "buttonContainer") return
    clearInterval(TIMER)
    if (selectedAnswerText === question[question_Index]['answer']) {
        selectedAnswer.classList.add('AnswerGood')
    } else {
        selectedAnswer.classList.add('AnswerEror')
    }

    Array.from(Answer.children).forEach(button => {
        if (button.textContent === question[question_Index]['answer']) {
            button.classList.add('AnswerGood')
        }
        button.disabled = true
    })

});

function clearPage() {
    TitleText.innerHTML = ''
    Question.innerHTML = '';
    Answer.innerHTML = '';
    submBut.innerHTML = ''
}

function showContainer() {

    timer.innerHTML = `Time`

    const titleTemplate = `Question %number%/5`
    const titleHTML = titleTemplate.replace('%number%', question_Index + 1)

    TitleText.classList.add('textMain1')
    TitleText.innerHTML = titleHTML
    Question.innerHTML = question[question_Index]['question'];

    //setInterval(subtractTime, 1000)


    let optionsTemplate = `
        <button value="1" class="Answer">%answer%</button>
        <button value="2" class="Answer" >%answer%</button>
        <button value="3" class="Answer">%answer%</button>
        <button value="4" class="Answer">%answer%</button>
    `;

    for (text_answer of question[question_Index]['options']) {

        const answerHTML = optionsTemplate.replace('%answer%', text_answer)
        optionsTemplate = answerHTML

        Answer.innerHTML = answerHTML
    }
    submBut.classList.add('submitNextContainer')
    submBut.innerHTML = `<input class="next_butt" onclick="checkAnswer()" id="Submit" type="image" name="next" src="img/carbon_next.jpg" alt="Submit" style="width: 50px;"/>`


}

function checkAnswer() {

    if (!selectedAnswer) {
        return
    }

    count = 10;
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
    blocktime.innerHTML = count;
    selectedAnswer = 0

    if (selectedAnswerText === question[question_Index]['answer']) {
        score++;
    }

    if (question_Index + 1 !== question.length) {

        question_Index++
        clearPage()
        showContainer()
    } else {


        clearPage()
        showResults()
    }
    console.log(score)
}

function showResults() {
    clearInterval(TIMER)
    blocktime.innerHTML = ""
    const titleTemplate = `%title%`
    const messageTemplate = `%message%`
    const resultTemplate = '%result%'
    const button = ` <button class="restart" id="Restart" onclick="createPage()" >Restart</button>`
    submBut.classList.remove('submitNextContainer')
    TitleText.classList.remove('textMain1')

    let title, message
    let result = `${score} / ${question.length}`

    if (score === question.length) {
        title = 'Wonderful!!!'
        message = 'You answered all the questions correctly 👍'

    } else if ((score * 100) / question.length >= 50) {
        title = 'Good!'
        message = 'You answered most of the answers correctly 🦇'
    } else {

        title = 'Can be better'
        message = 'You answered less than half of the correct answers 👣'
    }

    const titleHTML = titleTemplate.replace('%title%', title)
    const messageHTML = messageTemplate.replace('%message%', message)
    const resultHTML = resultTemplate.replace('%result%', result);

    timer.innerHTML = ''
    TitleText.innerHTML = titleHTML
    Question.innerHTML = messageHTML
    Answer.innerHTML = resultHTML
    submBut.innerHTML = button


}







