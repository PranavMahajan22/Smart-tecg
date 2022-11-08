const quizDB = [

    {
        question: 'What is the preferred way for adding a background color in HTML?',
        a: '<body background="yellow">',
        b: '<background>yellow</background>',
        c: '< body style="background-color:yellow">',
        d: '<background color="yellow">text<background></background>',
        ans: "ans3"
    },
    {
        question: 'Which of these tags are all <table> tags?',
        a: '<table><head><tfoot>',
        b: '<table><tr><td>',
        c: '<table><tr><tt>',
        d: '<thead><body><tr></tr>',
        ans: "ans2"
    },
    {
        question: 'The attribute used to define a new namespace is.',
        a: 'XMLNS',
        b: 'XmlNameSpace',
        c: 'Xmlns',
        d: 'XmlNs',
        ans: "ans3"
    },
    {
        question: 'How can you create an e-mail link?',
        a: '<mail href="a@b">',
        b: '<mail>a@b</mail>',
        c: '<a href="a@b">',
        d: '<a href="mailto:a@b.com">',
        ans: "ans4"
    },
    {
        question: 'Whats so great about XML?',
        a: 'Easy data exchange',
        b: 'High speed on network',
        c: 'Only B.is correct',
        d: 'Both A & B',
        ans: "ans4"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;


    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
                <h3>Score : ${score}/${quizDB.length} 🥇 </h3>
                <button class="btn" onclick="location.reload()">Play Again </button>
                `;

        showScore.classList.remove('scoreArea');
    }
});