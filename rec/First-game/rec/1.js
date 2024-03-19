function clicked() {
    scoreElement = document.getElementById('score')
    score = parseInt(scoreElement.innerText)
    a = Math.floor(Math.random() * 100)
    if (a < 89){
        console.log(a)
        
        
        score++
        scoreElement.innerText=score
        
    }
    else{
        document.getElementById("section1").classList.add("hidden")
        document.getElementById("section2").classList.remove("hidden")
        console.log("You lose")
        scoreElement.innerText=0
        document.getElementById("scorefinal").innerText=score
        scoreElement.innerText=0

    }
}

function again(){
    document.getElementById("section2").classList.add("hidden")
    document.getElementById("section1").classList.remove("hidden")

}