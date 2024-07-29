
function gameFinishedOutPut(){
    pauseTimer();
    console.log('gameFinished')
    document.getElementById('pauseTimer').classList.remove('hidden');
    document.getElementById('pauseTimerCon').innerText='You Solved it!!!';

}
