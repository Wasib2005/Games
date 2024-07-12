const levels = ["84___5___3_198_2___2961738__9_37__45______89_185_967_3_58_6___2_1___95_8_7___2461", "148362975_5_4_9___29______3_1___8_948__291_3___974682___562341___318__57461_7__82", "_168_3_59_______17_7_2_16___69_2__488_7_695232_14__79_19_68_4_____5___616_53__97_", "______189_____3467_7_9863__9_38___1_7_54_____28__7_5_6459_31_78_____89313_8697___"
]


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



function newGame(value) {
    n = 1
    value.forEach(element => {
        let docElement = document.getElementById(`place${n}`)
        if (element in [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            docElement.removeAttribute("placeholder")
            docElement.setAttribute("placeholder", `${element}`)
            docElement.setAttribute("readonly", true)
            docElement.classList.add("bg-slate-500")
        }
        n++
    });

}
newGame(levelToTempLevel(level))
function reset() {


}