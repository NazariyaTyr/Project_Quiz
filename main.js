

let question=[

    {
        question:'What is the freezing point of water?',
        options: ['-5', '-6', '0', '1'],
        answer:'0'
    },
    {
        question:'How many planets are in the solar system?',
        options: ['8', '9', '7', '10'],
        answer:'8'

    },
    {
        question:'What is the longest river in the world?',
        options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
        answer:'Amazon'
    },
    {
        question:'How many chromosomes are in the human genome?',
        options: ['42', '23', '44', '46'],
        answer:'46'
    },
    {
        question:'What is the capital of Canada?',
        options: ['Toronto', 'Ottawa', 'Vancouver', 'Athens' ],
        answer:'Ottawa'
    }


]

let score=0; // к-во ответ
let question_Index=0; // тек вопр

const headerContainer=document.querySelector('#headerContainer')
const startBut=document.querySelector('#Start')
const Question=document.querySelector('#Question');
const Answer=document.querySelector('#Answers');
const TitleText=document.querySelector('#Title');
const submBut=document.querySelector('#Submit')
let selectedAnswer;
let selectedAnswerText;


startBut.onclick = function(){
    clearPage();
    showContainer();
    checkAnswer();
}

Answer.addEventListener('click', e => {
    selectedAnswerText=e.target.innerText
    selectedAnswer=e.target
});

function clearPage(){
    Question.innerHTML='';
    Answer.innerHTML='';
    TitleText.innerHTML=''
    submBut.innerHTML=''
    startBut.innerHTML=''
}

function showContainer(){

    const titleTemplate=`<p class="textMain" id="Title">Question %number%/10</p>`
    // const titleTemplate=`Question %number%/10`
    const titleHTML=titleTemplate.replace('%number%', question_Index+1)
    TitleText.innerHTML=titleHTML


    const headerTemplate_Q=`<p class="textQuestion" id="Question">%title%</p>`;
    const questionHTML=headerTemplate_Q.replace('%title%', question[question_Index]['question']);
    Question.innerHTML=questionHTML;
    // Question.innerHTML= question[question_Index]['question'];

    let optionsTemplate= `
        <button value="1" class="Answer">%answer%</button>
        <button value="2" class="Answer" >%answer%</button>
        <button value="3" class="Answer">%answer%</button>
        <button value="4" class="Answer">%answer%</button>
    `;

    for( text_answer of  question[question_Index]['options']){

        const answerHTML=optionsTemplate.replace('%answer%', text_answer)
        optionsTemplate=answerHTML

        Answer.innerHTML =  answerHTML
    }
    submBut.innerHTML=`<input class="next_butt" onclick="checkAnswer()" id="Submit" type="image" name="next" src="img/carbon_next.jpg" border="0" alt="Submit" style="width: 50px;"/>`
}

function checkAnswer(){

    if(!selectedAnswer){
        return
    }

    if(selectedAnswerText===question[question_Index]['answer']){
        score++;
    }

    if(question_Index+1!==question.length){

        question_Index++
        clearPage()
        showContainer()
    }
    else {
        clearPage()
        showResults()
    }
    console.log(score)
}

function showResults(){
    const resultTemplate=`
    <p class="textMain">%title%</p>
    <p class="textQuestion">%message%</p>
    <p class="result">%result%</p>
    `;

    let title, message
    let result=`${score} / ${question.length}`

    if (score===question.length){
        title='Wonderful!!!'
        message='You answered all the questions correctly 👍'

    }else if ((score*100)/question.length>=50){
        title='Good!'
        message='You answered most of the answers correctly 🦇'
    }
    else {

        title='Can be better'
        message='You answered less than half of the correct answers 👣'
    }

    const finelText=resultTemplate
                                .replace('%title%', title)
                                .replace('%message%', message)
                                .replace('%result%', result);

    headerContainer.innerHTML=finelText
}







