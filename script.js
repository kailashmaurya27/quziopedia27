const quizData = [
  {
    question: "1. Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "2. What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "3. What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "4. Choose the correct HTML tag for a large title.",
    a: "H1",
    b: "HEADING",
    c: "HEAD",
    d: "H6",
    correct: "a",
  },
  {
    question: "5. What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "6. Which styling, using a <style> element in the head section is called.",
    a: "External",
    b: "Outline",
    c: "Internal",
    d: "Inline",
    correct: "c",
  },
  {
    question: "7. _________ keyword is used to declare variables in javascript.",
    a: "Var",
    b: "Dim",
    c: "String",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "8. The link to a bookmark is added in an attribute named as.",
    a: "link",
    b: "href",
    c: "src",
    d: "id",
    correct: "b",
  },
  {
    question: "9. What is the correct HTML tag for inserting a line break?",
    a: "<br />",
    b: "<break />",
    c: "<nbsp>",
    d: " <lb />",
    correct: "a",
  },
  {
    question: "10. Which of the following function of Array object extracts a section of an array and returns a new array?",
    a: "reverse()",
    b: "shift()",
    c: "slice()",
    d: "none of the above",
    correct: "c",
  },
  


];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>Congratulations!⭐You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
