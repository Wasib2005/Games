function calculate(){
    const checkList={}
    for (let xy = 0; xy < 9; xy++) {
        const xList=[]
        const yList=[]
        const sectionList=[]
        
        for (let x = 1; x < 10; x++) {
            const element = document.getElementById(`place${xy*9+x}`)

            const tempElement = hasValueOrNot(element) 
            xList.push(tempElement)
        }
        for (let y = 0; y < 9; y++) {
            const element = document.getElementById(`place${xy+y*9+1}`)

            const tempElement = hasValueOrNot(element) 
            yList.push(tempElement)
        }
        const sectionElement=document.getElementById(`sec${xy+1}`).querySelectorAll('input')
        sectionElement.forEach(element => {
            element=hasValueOrNot(element)
            sectionList.push(element)
        });
        
        
        checkList[`xy${xy}`]={xList,yList,sectionList}
        console.log(checkList)
    }
    
    checking()
}


function hasValueOrNot(element){

    if (element.value!==''){
        return element.value
    }
    else if(element.placeholder!==''){

        return element.placeholder
    }
    else{
        return "Not Solved"
    }

}

function checking(){
    const all=[]
    const allInputElement=document.getElementById('playground').querySelectorAll('input')

    allInputElement.forEach(element => {
        element=hasValueOrNot(element)
        all.push(element)
    });
    if(!(all.includes('Not Solved'))){
        gameFinished()
    }

}


calculate()