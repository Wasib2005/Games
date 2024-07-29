const timerElement = document.getElementById('timer');
const timerBtn = document.getElementById('timerBtn');

let timerId;
let startTime;
let elapsedTime = 0;
function startTimer() {
  startTime = Date.now();
  timerId = setInterval(updateTimer, 1000); // Update every second
  timerBtn.textContent = 'Pause';
};
function pauseTimer() {
  clearInterval(timerId);
  elapsedTime += Date.now() - startTime;
  timerId = null; // Reset timerId
  timerBtn.textContent = 'Start';
};
function updateTimer() {
  const currentTime = Date.now();
  const totalSeconds = Math.floor((currentTime - startTime + elapsedTime) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  timerElement.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
timerElement.addEventListener('click', () => {
  if (timerId) {
    pauseTimer();
  } else {
    startTimer();
  }
});

