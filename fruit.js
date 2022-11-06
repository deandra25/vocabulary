const quizData = [
    {
        question: "1. … taste sweet (terasa manis)",
        a: "Ataheitte apple ( Buah Kedondong )",
        b: "Strawberry",
        c: "Grape",
        d: "Lemon",
        correct: "c",
    },
    {
        question: "2. Avocado's color is … ",
        a: "Orange",
        b: "Green",
        c: "Purple",
        d: "Blue",
        correct: "b",
    },
    {
        question: "3. What fruit taste sour ?",
        a: "Lemon",
        b: "Avocado",
        c: "Grape",
        d: "Apple",
        correct: "a",
    },
    {
        question: "4. Banana color is … ",
        a: "Red",
        b: "Green",
        c: "Yellow",
        d: "Purple",
        correct: "c",
    },
    {
        question: "5. …'s color is red.",
        a: "Melon",
        b: "Strawberry",
        c: "Papaya",
        d: "Banana",
        correct: "b",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
    
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your score is ${score} / ${quizData.length}</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})