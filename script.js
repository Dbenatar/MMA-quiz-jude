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
      { text: "KEn Shamrock", correct: false },
    ],
  },
  {
    question: "What is the name of an area where a species live?",
    answers: [
      { text: "House", correct: false },
      { text: "Flat", correct: false },
      { text: "Room", correct: false },
      { text: "Habitat", correct: true },
    ],
  },
  {
    question: "What is the name of the seed of an oak tree?",
    answers: [
      { text: "Berry", correct: false },
      { text: "Acorn", correct: true },
      { text: "Conker", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "Where are macaws found living in the wild?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Asia", correct: false },
      { text: "Australasia", correct: false },
      { text: "South America", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a stage of a butterflies life?",
    answers: [
      { text: "Chrysalis", correct: false },
      { text: "Egg", correct: false },
      { text: "Kitten", correct: true },
      { text: "Caterpillar", correct: false },
    ],
  },
  {
    question: "What animal is the GUP K based on?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Alligator", correct: true },
      { text: "Angler fish", correct: false },
      { text: "Monkey", correct: false },
    ],
  },
  {
    question: "What is a group of caterpillars called? ",
    answers: [
      { text: "Army", correct: true },
      { text: "Pod", correct: false },
      { text: "School", correct: false },
      { text: "Pack", correct: false },
    ],
  },
  {
    question: "What kind of animal is Octo agent Min?",
    answers: [
      { text: "Panda bear", correct: false },
      { text: "Eagle", correct: false },
      { text: "Cow", correct: false },
      { text: "Red Panda", correct: true },
    ],
  },
  {
    question: "Which continent is India in?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Antartica", correct: false },
      { text: "Asia", correct: true },
      { text: "North America", correct: false },
    ],
  },
  {
    question: "What is the tallest mammal in the world?",
    answers: [
      { text: "Maia Beast", correct: false },
      { text: "Giraffe", correct: true },
      { text: "Hippo", correct: false },
      { text: "Sprout", correct: false },
    ],
  },
];
