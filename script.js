const questions = [
  {
    question: "Which of the following is a markup language?",
    answers: [
      { text: "CSS", correct: false},
      { text: "HTML", correct: true},
      { text: "Javascript", correct: false},
      { text: "Java", correct: false},
    ]
  },
  {
    question: "What year was JavaScript launched?",
    answers: [
      { text: "1996", correct: false},
      { text: "1995", correct: true},
      { text: "1994", correct: false},
      { text: "None of theses", correct: false},
    ]
  },
  {
    question: "What does CSS stands for?",
    answers: [
      { text: "Hypertext Markup Language", correct: false},
      { text: "Cascading Style Sheet", correct: true},
      { text: "Jason Object Notation", correct: false},
      { text: "Helicopters Terminals Motorboats Lamborginis", correct: false},
    ]
  },
  {
    question: "Which data structure is used for implementing recursion?",
    answers: [
      { text: "Stack", correct: true},
      { text: "Queue", correct: false},
      { text: "List", correct: false},
      { text: "Array", correct: false},
    ]
  },
  {
    question: "The data structure required to check whether an expression contains a balanced parenthesis is?",
    answers: [
      { text: "Stack", correct: true},
      { text: "Queue", correct: false},
      { text: "List", correct: false},
      { text: "Array", correct: false},
    ]
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  currentQuestion.answers.forEach (answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn4");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}
function resetState(){
  nextButton.style.display = "none";
  while (answerButtons.firstChild){
    answerButtons.removeChild (answerButtons.firstChild);
  }
}
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions. length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click", ()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();


function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

// Basic validation
if (username.value === "" || password.value === "") {
alert("Please enter both username and password");
return;
}

// In a real-world scenario, you would send a request to the server for authentication.
// For simplicity, we'll just show an alert for now.
alert("Login successful! Welcome, " + username.value);
return;
}

function login1() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let password1 = document.getElementById("password1");
if (username.value === "" || password.value === "" || password1.value === "") {
  alert("Please enter both username and password");
  return;
}
else if (password.value!=password1.value) {
  alert("Password not match!");
  return;
} else {
  alert("Login successful! Welcome, " + username.value);
  return;
}
}