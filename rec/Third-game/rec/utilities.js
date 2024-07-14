
let opacity = 170
function showErrorAlert(text){
    const element = document.getElementById('errorAlert')
    document.getElementById('errorAlertText').innerText=text
    element.classList.remove("hidden")
    errorAlertTime()
    
}
function errorAlertTime(){
   setTimeout (errorAlertRemoving);
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

        opacity = 170
    }
}
