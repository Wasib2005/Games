document.getElementById("playground").addEventListener("keyup", (event) => {
    const targetEventValue = event.srcElement.value.split('')

    const targetEventId = event.srcElement.id
    const targetEventElement = document.getElementById(targetEventId)
    let onlyNum



    if ((targetEventId.split('')[6]) === undefined) {
        onlyNum=Number(targetEventId.split('')[5])
    }
    else if((targetEventId.split('')[6]) !== undefined){
        onlyNum=Number(`${targetEventId.split('')[5]}${targetEventId.split('')[6]}`)
    }



    if (event.key === "Enter") {
        if (parseInt(onlyNum/9)<8){
            document.getElementById(`place${onlyNum+9}`).focus()
        }
        else{
            document.getElementById(`place${onlyNum%9+1}`).focus()

        }
    }
    else if (event.key === "ArrowDown") {
        if (parseInt(onlyNum/9)===8){
            
            document.getElementById(`place${onlyNum%9}`).focus()
        }
        else if (onlyNum===81){

            document.getElementById(`place${9}`).focus()
        }
        else{
            document.getElementById(`place${onlyNum+9}`).focus()

        }
        
    }
    else if (event.key === "ArrowUp") {
        if (parseInt(onlyNum/9)===0){
            document.getElementById(`place${72+onlyNum}`).focus()

        }
        else if (onlyNum===9){
            document.getElementById(`place${81}`).focus()
            
        }
        else{
            document.getElementById(`place${onlyNum-9}`).focus()

        }

    }

    else if(event.key === "ArrowRight"){
        if (onlyNum<81){
            document.getElementById(`place${onlyNum+1}`).focus()
            
        }
        else{
            document.getElementById(`place${1}`).focus()

        }
    }
    else if(event.key === "ArrowLeft"){
        if (onlyNum===1){

            document.getElementById(`place${81}`).focus()
        }
        else{

            document.getElementById(`place${onlyNum-1}`).focus()
        }

    }

    else if (event.srcElement.hasAttribute("readonly")) {
        showErrorAlert('That cell is immutable')
    }

    else if (targetEventValue.length === 1) {
        if (!(['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(targetEventValue[0]))) {
            showErrorAlert("Please input 1 to 9. Other than that are not allowed")
            targetEventElement.value = ''
        }
    }
    else if (targetEventValue.length === 2) {
        if (!(['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(targetEventValue[1]))) {
            showErrorAlert("Please input 1 to 9. Other than that are not allowed")
        }
        else {
            targetEventElement.value = targetEventValue[1]
        }
    }
    else {
        showErrorAlert("Please input 1 number at a time!!!")
        targetEventElement.value = ''
    }


    calculate()

}

)



