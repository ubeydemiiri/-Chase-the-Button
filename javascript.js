let score = 0;
let timeLeft = 10;
let timer;
const movingBtn = document.getElementById("moving-btn");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const restartBtn = document.getElementById("restart-btn");

function moveButton() {
  const container = document.getElementById("quiz-container");
  const maxWidth = container.offsetWidth - movingBtn.offsetWidth;
  const maxHeight = container.offsetHeight - movingBtn.offsetHeight;
  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  movingBtn.style.left = `${randomX}px`;
  movingBtn.style.top = `${randomY}px`;
}
movingBtn.addEventListener("click", () => {
  score++;
  scoreElement.textContent = `النتيجة: ${score}`;
  moveButton();
});
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `الوقت المتبقي: ${timeLeft}`;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}
function endGame() {
  clearInterval(timer);
  movingBtn.classList.add("d-none");
  alert(`الوقت انتهى!\nالنتيجة النهائية: ${score}`);
restartBtn.classList.remove("d-none");
}
function restartGame() {
  score = 0;
  timeLeft = 10;
  scoreElement.textContent = "0 :النتيجة";
  timerElement.textContent = "الوقت المتبقي: 10";
movingBtn.classList.remove("d-none");
restartBtn.classList.add("d-none");
moveButton();
startTimer();
}
document.addEventListener("DOMContentLoaded", () => {
  moveButton();
  startTimer();
});
