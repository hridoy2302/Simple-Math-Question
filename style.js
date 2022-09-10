const num1 = Math.floor(Math.random() * 20);

const num2 = Math.floor(Math.random() * 15);

const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreElement.innerText = `score: ${score}`

questionElement.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;
formElement.addEventListener("submit", () => {
  const userAns = +inputElement.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
