import './index.html'
import './styles.css'
let question=[
    {
        num:1,
        question:'RRRRRRRRRRRRRR',
        answer:'rrrrrrrrrrrrr',
        options: [
            'qqqqqqqqqqqq',
            'yyyyyyyyyyyy',
            'wwwwwwwwwwww',
            'rrrrrrrrrrrr'
        ]
    },
    {
        num:2,
        question:'AAAAAAAAAAA',
        answer:'aaaaaaaaaaaa',
        options: [
            'eeeeeeeeeeee',
            'iiiiiiiiiiii',
            'aaaaaaaaaaaa',
            'uuuuuuuuuuuu'
        ]
    },
    {
        num:3,
        question:'101010101010',
        answer:'11111111111',
        options: [
            '111111111111',
            '222222222222',
            '999999999999',
            '555555555555'
        ]
    }
]

const Start=document.querySelector(".star button")
const timeText=document.querySelector(".timerContainer .timeTxt ")
const timeCount=document.querySelector(".timerContainer .timer")
const start_box=document.querySelector(".Container .StartContainer")
const quiz_box=document.querySelector(".Container .QuizContainer")

Start.onclick = ()=>{
    start_box.classList.add("activeStart")
}



