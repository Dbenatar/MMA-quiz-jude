const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuesiton(shuffledQuestions[currentQuestionIndex]);
}

function showQuesiton(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.innerText;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState(e) {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// "answers" not "answer"?
const questions = [
  {
    question:
      "What is the name of the Brazilian family who poularised MMA and began a jujitsu school?",
    answers: [
      { text: "Gracie", correct: true },
      { text: "Figo", correct: false },
      { text: "Rio", correct: false },
      { text: "Tudo", correct: false },
    ],
  },
  {
    question:
      "Who is the only person to have a video game character in a UFC, WWE and NFL game?",
    answers: [
      { text: "Georges St-Pierre", correct: false },
      { text: "Tyson Fury", correct: false },
      { text: "Brock Lesnar", correct: true },
      { text: "Ken Shamrock", correct: false },
    ],
  },
  {
    question: "What year was the first UFC event held?",
    answers: [
      { text: "2000", correct: false },
      { text: "1986", correct: false },
      { text: "1990", correct: false },
      { text: "1993", correct: true },
    ],
  },
  {
    question: "What does UFC stand for?",
    answers: [
      { text: "Ugly Fart Chump", correct: false },
      { text: "Ultimate Fighting Championship", correct: true },
      { text: "Universal Football Club", correct: false },
      { text: "Unhappy Ferret Council", correct: false },
    ],
  },
  {
    question: "In what year where weight divisions introduced to UFC?",
    answers: [
      { text: "2008", correct: false },
      { text: "2001", correct: false },
      { text: "1993", correct: false },
      { text: "1997", correct: true },
    ],
  },
  {
    question: "How much is the UFC championship belt worth?",
    answers: [
      { text: "A tenner", correct: false },
      { text: "$500,000", correct: false },
      { text: "$333,000", correct: true },
      { text: "$1000", correct: false },
    ],
  },
  {
    question:
      "Who has the record for the most KO/TKO wins in sanctioned MMA bouts?",
    answers: [
      { text: "Connor McGregor", correct: false },
      { text: "Travis Fulton", correct: true },
      { text: "Anderson Silva", correct: false },
      { text: "Jon Jones", correct: false },
    ],
  },
  {
    question: "Who has the record for the most consecutive wins",
    answers: [
      { text: "Anderson Silva", correct: true },
      { text: "Demetrious Johnson", correct: false },
      { text: "Randy Couture", correct: false },
      { text: "Chuck Liddell", correct: false },
    ],
  },
  {
    question: "Who is the only woman to become a UFC champion of 2 divisions?",
    answers: [
      { text: "Miesha Tate", correct: false },
      { text: "Holly Holm", correct: false },
      { text: "Rhonda Rousey", correct: false },
      { text: "Amanda Nunes", correct: true },
    ],
  },
  {
    question: "What was the main event at UFC 200?",
    answers: [
      { text: "St-Pierre vs Alves", correct: false },
      { text: "Lesnar vs Hunt", correct: false },
      { text: "Nunes vs Tate", correct: true },
      { text: "Cormier vs Silva", correct: false },
    ],
  },
  {
    question:
      "Whittaker vs Adesanya in Melbourne Australia was the most attended UFC event of all time, what was the attendance?",
    answers: [
      { text: "48,000", correct: false },
      { text: "57,000", correct: true },
      { text: "100,000", correct: false },
      { text: "20,000", correct: false },
    ],
  },
];
