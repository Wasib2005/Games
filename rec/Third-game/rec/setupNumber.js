let level = (levels[Math.floor(Math.random() * (levels.length - 0)) + 0]).split('')



let startTime = 0;  // Stores the starting timestamp
let intervalId;     // Stores the interval ID for stopping later

function startTimer() {
  startTime = Date.now();  // Get current timestamp when timer starts
  intervalId = setInterval(updateTimer, 1000);  // Update timer every second
}

function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;  // Calculate elapsed time in milliseconds

  // Convert elapsed time to hours, minutes, and seconds
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);

  // Format the time as "HH:MM:SS"
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Update the timer display on the page
  document.getElementById("timer").innerHTML = formattedTime;
}




function levelToTempLevel(level) {
    let tempLevel = []
    level.forEach(element => {
        if (element !== ' ' && element !== '\n') {
            tempLevel.push(element)
        }
    });
    return tempLevel
}



function setGame(value) {
    n = 1
    value.forEach(element => {
        let docElement = document.getElementById(`place${n}`)
        if (element in [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            
            docElement.removeAttribute("readonly")
            docElement.removeAttribute("placeholder")
            docElement.classList.remove("bg-slate-500")
            
            docElement.setAttribute("placeholder", `${element}`)
            docElement.setAttribute("readonly", true)
            docElement.classList.add("bg-slate-500")
            docElement.value=''
        }
        else{
            docElement.value=''
            docElement.removeAttribute("placeholder")
            docElement.removeAttribute("readonly")
            docElement.removeAttribute("placeholder")
            docElement.classList.remove("bg-slate-500")


        }

        n++
        startTimer()
    });

}



setGame(levelToTempLevel(level))
function resetGame() {
    setGame(levelToTempLevel(level))

}
function newGame(){
    level = (levels[Math.floor(Math.random() * (levels.length - 0)) + 0]).split('')
    setGame(levelToTempLevel(level))
}

newGame()


