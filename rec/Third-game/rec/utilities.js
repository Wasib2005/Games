
let opacity = 100



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



function showErrorAlert(text){
    const element = document.getElementById('errorAlert')
    document.getElementById('errorAlertText').innerText=text
    element.classList.remove("hidden")
    errorAlertTime()
    
}
function errorAlertTime(){
   setTimeout (errorAlertRemoving,25);
}
function errorAlertRemoving(){
    const element = document.getElementById('errorAlert')
    element.classList.add(`opacity-[${opacity}%]`)
    opacity --
    if (opacity!==0){
        errorAlertTime()
    }
    else{
        element.removeAttribute('class')
        element.setAttribute("class", 'alert alert-error max-w-[1080px] flex items-start absolute top-[100px] hidden')

        opacity = 100
    }
}
