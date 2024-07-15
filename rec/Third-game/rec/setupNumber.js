let level = (levels[Math.floor(Math.random() * (levels.length - 0)) + 0]).split('')




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
        if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element)) {
            
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



