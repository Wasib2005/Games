document.getElementById("playground").addEventListener("keyup", (event) => {
    const targetEventValue = event.srcElement.value.split('')

    const targetEventId = event.srcElement.id
    const targetEventElement = document.getElementById(targetEventId)
    // console.log(event.srcElement.hasAttribute("readonly"))

    if (targetEventValue.length === 1) {
        if (!(['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(targetEventValue[0]))){
            showErrorAlert("Please input 1 to 9. Other than that are not allowed")
            targetEventElement.value=''
        }
    }
    else if (targetEventValue.length===2){
        if (!(['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(targetEventValue[1]))){
            showErrorAlert("Please input 1 to 9. Other than that are not allowed")
        }
        else{
            targetEventElement.value=targetEventValue[1]
        }
    }
    else{
        showErrorAlert("Please input 1 number at a time!!!")
        targetEventElement.value=''
    }

}

)



