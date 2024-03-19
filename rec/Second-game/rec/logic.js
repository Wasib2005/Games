let turn = 0
let oScore = 0
let xScore = 0


function reset() {
    document.getElementById('mainGame').innerHTML = `<div>
    <div id="game" class="h-[390px] lg:h-[500px] w-[390px] lg:w-[500px] grid grid-cols-3 gap-3" onclick="check()">

      <div onclick="clicked1()" id="1"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-l-0 border-t-0 rounded-ee-lg">
        1</div>
      <div onclick="clicked2()" id="2"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-t-0 rounded-ee-lg rounded-es-lg ">
        2</div>
      <div onclick="clicked3()" id="3"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-r-0 border-t-0 rounded-es-lg">
        3</div>
      <div onclick="clicked4()" id="4"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-l-0 rounded-e-lg">
        4</div>
      <div onclick="clicked5()" id="5"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center rounded-lg border-4 ">5</div>
      <div onclick="clicked6()" id="6"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-r-0 rounded-s-lg">
        6</div>
      <div onclick="clicked7()" id="7"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-l-0 border-b-0 rounded-se-lg">
        7</div>
      <div onclick="clicked8()" id="8"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-b-0 rounded-se-lg rounded-ss-lg">
        8</div>
      <div onclick="clicked9()" id="9"
        class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-r-0 border-b-0 rounded-ss-lg">
        9</div>
    </div>
  </div>
  
  
  <div class="flex justify-between w-[390px] lg:w-[500px] mt-10 text-2xl ">
    <div class="">O'score :<span id="O'score">0</span></div>
    <div class="">X'score :<span id="X'score">0</span></div>
  </div>
  
  <div>
    <button class="btn" onclick="continuing()">Continue</button>
    <button class="btn" onclick="reset()">Reset</button>
  </div>`;

    document.getElementById('mainGame').classList.remove('hidden')
    document.getElementById('announcement-con').classList.add('hidden')
    oScore = 0
    xScore = 0


}

function continuing(){
    document.getElementById('game').innerHTML = `<div onclick="clicked1()" id="1"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-l-0 border-t-0 rounded-ee-lg">
    1</div>
  <div onclick="clicked2()" id="2"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-t-0 rounded-ee-lg rounded-es-lg ">
    2</div>
  <div onclick="clicked3()" id="3"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-r-0 border-t-0 rounded-es-lg">
    3</div>
  <div onclick="clicked4()" id="4"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-l-0 rounded-e-lg">
    4</div>
  <div onclick="clicked5()" id="5"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center rounded-lg border-4 ">5</div>
  <div onclick="clicked6()" id="6"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-r-0 rounded-s-lg">
    6</div>
  <div onclick="clicked7()" id="7"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-l-0 border-b-0 rounded-se-lg">
    7</div>
  <div onclick="clicked8()" id="8"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-b-0 rounded-se-lg rounded-ss-lg">
    8</div>
  <div onclick="clicked9()" id="9"
    class="flex hover:bg-slate-400 justify-center h-[130] lg:h-[166px] items-center border-4 border-r-0 border-b-0 rounded-ss-lg">
    9</div>`;

    document.getElementById('mainGame').classList.remove('hidden')
    document.getElementById('announcement-con').classList.add('hidden')
}

const confirmInput = document.getElementById('confirm');
const resetButton = document.getElementById('resetButton');

function handleConfirm() {
  const confirmation = confirmInput.value.trim().toLowerCase(); // Ensure case-insensitive and remove extra spaces
  if (confirmation === 'confirm') {
    resetButton.classList.remove('disabled'); // Enable reset button
    confirmInput.value = ''; // Clear confirmation input
  } else {
    confirmInput.value = ''; // Clear confirmation input even on incorrect input
  }
}

confirmInput.addEventListener('keyup', handleConfirm);


function XOX(target) {
    element = document.getElementById(target);
    element.innerText = ''

    if (turn === 1) {
        element.classList.remove('hover:bg-slate-400');

        newElement = document.createElement("div")
        newElement.innerHTML = `<svg width="100" height="100"><line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="5" /><line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="5" /></svg>`
        console.log(newElement)
        element.appendChild(newElement)
        turn--
        console.log("line", turn)
    }
    else {
        element.classList.remove('hover:bg-slate-400');

        newElement = document.createElement("div")
        newElement.innerHTML = `<svg width="100" height="100"><circle cx="50" cy="50" r="45" stroke="green" stroke-width="7" fill="none" /></svg>`
        console.log(newElement)
        element.appendChild(newElement)
        turn++
        console.log("cercle", turn)
    }
    element.removeAttribute("onclick")

}

function clicked1() {
    clickOn = '1'
    XOX(clickOn)
}
function clicked2() {
    clickOn = '2'
    XOX(clickOn)
}
function clicked3() {
    clickOn = '3'
    XOX(clickOn)
}
function clicked4() {
    clickOn = '4'
    XOX(clickOn)
}
function clicked5() {
    clickOn = '5'
    XOX(clickOn)
}
function clicked6() {
    clickOn = '6'
    XOX(clickOn)
}
function clicked7() {
    clickOn = '7'
    XOX(clickOn)
}
function clicked8() {
    clickOn = '8'
    XOX(clickOn)
}
function clicked9() {
    clickOn = '9'
    XOX(clickOn)
}

function check() {
    a = document.getElementById('1').innerHTML
    b = document.getElementById('2').innerHTML
    c = document.getElementById('3').innerHTML
    d = document.getElementById('4').innerHTML
    e = document.getElementById('5').innerHTML
    f = document.getElementById('6').innerHTML
    g = document.getElementById('7').innerHTML
    h = document.getElementById('8').innerHTML
    i = document.getElementById('9').innerHTML


    if
        ((a === b && b === c) || (d === e && e === f) || (g === h && h === i) || (a === e && e === i) || (c === e && e === g) || (a === d && d === g) || (b === e && e === h) || (c === f && f === i)) {
        if (turn === 1) {
            document.getElementById('mainGame').classList.add('hidden')
            document.getElementById('announcement').innerText = "O win this round!!!"
            document.getElementById('announcement-con').classList.remove('hidden')
            oScore++
            document.getElementById("O'score").innerText=oScore
            document.getElementById("O'score2").innerText=oScore


        }
        else {
            document.getElementById('mainGame').classList.add('hidden')
            document.getElementById('announcement').innerText = "X win this round!!!"
            document.getElementById('announcement-con').classList.remove('hidden')
            xScore++
            document.getElementById("X'score").innerText=xScore
            document.getElementById("X'score2").innerText=xScore
        }
    }



}
