
let opacity = 100


const timerElement = document.getElementById('timer');

let timerId;
let startTime;
let elapsedTime = 0;

function startTimer() {
  startTime = Date.now();
  timerId = setInterval(updateTimer, 1000);
  document.getElementById('pauseTimer').classList.add('hidden')
  document.getElementById('pauseBtn').innerText='Pause'
}

function pauseTimer() {
  document.getElementById('pauseTimer').classList.remove('hidden')
  clearInterval(timerId);
  elapsedTime += Date.now() - startTime;
  timerId = null; // Reset timerId
  document.getElementById('pauseBtn').innerText='Unpause'

}
function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  elapsedTime = 0;
  document.getElementById('pauseTimer').classList.add('hidden')
}


function updateTimer() {
  const currentTime = Date.now();
  const totalSeconds = Math.floor((currentTime - startTime + elapsedTime) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  timerElement.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.body.addEventListener('keyup', () => {
  console.log(event.key==="Escape")

  if (event.key==="Escape") {
    if (timerId) {
      pauseTimer();
    } else {
      startTimer();
    }
  }
});
document.getElementById('pauseTimer').addEventListener('click', () => {
  console.log(12)
  startTimer()
});
document.getElementById('pauseBtn').addEventListener('click', () => {
  if (timerId) {
    pauseTimer();
  } else {
    startTimer();
  }
});






function showErrorAlert(text) {
  const element = document.getElementById('errorAlert')
  document.getElementById('errorAlertText').innerText = text
  element.classList.remove("hidden")
  errorAlertTime()

}
function errorAlertTime() {
  setTimeout(errorAlertRemoving, 25);
}
function errorAlertRemoving() {
  const element = document.getElementById('errorAlert')
  element.classList.add(`opacity-[${opacity}%]`)
  opacity--
  if (opacity !== 0) {
    errorAlertTime()
  }
  else {
    element.removeAttribute('class')
    element.setAttribute("class", 'alert alert-error max-w-[1080px] flex items-start absolute top-[100px] hidden')

    opacity = 100
  }
}






