const levels =[
    `
1_34_67_9
1_34_6__9
12_4_67_9
1234_6789
1_345__89
1___56789
1______89
1_34_6_89
12_456_89
`
    ,
    `
2_3456_89
_________
12_456789
1234_6789
12345__89
1___56789
1______89
123456_89
12_456_89
`
    ,
    `
323456789
1_3456789
_________
1234_6789
12345__89
1___56789
1______89
123456_89
12_456_89
`
    ,
    `
423456789
1_3456789
12_456789
_________
_________
1___56789
1______89
123456_89
12_456_89
`
    ,
]


let level=(levels[Math.floor(Math.random() * (levels.length - 0)) + 0]).split('')


let tempLevel = []


level.forEach(element => {
    if (element !== ' ' && element !== '\n') {
        tempLevel.push(element)
    }
});


function newGame(value){
    n = 1
    value.forEach(element => {
        let docElement=document.getElementById(`place${n}`)
        if (element in [1,2,3,4,5,6,7,8,9]){
            console.log(element)
            docElement.setAttribute("placeholder",`${element}`)
            docElement.setAttribute("readonly",true)
            docElement.classList.add("bg-slate-500")

        }


        n++
    });
    
}
newGame(tempLevel)