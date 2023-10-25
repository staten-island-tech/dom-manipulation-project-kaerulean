
const DOMSelectors = {
    button: document.querySelector("#button"),
    container: document.querySelector(".container"),
    remove: document.querySelector("#remove"),
    inputRed: document.querySelector("#form-red"), //make separate inputs for each?!
    inputBlue: document.querySelector("#form-blue"),
    inputGreen: document.querySelector("#form-green"),
    h3s: document.querySelectorAll("h3") //i dont even why this is here but i'm keeping it for funsies
}


function click(){
    DOMSelectors.button.addEventListener("click", function(event){
        const userInputRed = DOMSelectors.inputRed.value;
        console.log(userInputRed); 
    
        const userInputGreen = DOMSelectors.inputGreen.value;
        console.log(userInputGreen); 
    
        const userInputBlue = DOMSelectors.inputBlue.value; 
        console.log(userInputBlue);
        
        
        if (Number(userInputRed) <= 255 && Number(userInputGreen) <= 255 && Number(userInputBlue) <= 255) { //alerts when user enters not valid rgb values
            console.log("yay")
          } else {
            alert("hey those aren't valid rgb values")
            return click()
          }

        const style = 'rgb(' + userInputRed + ',' + userInputGreen + ',' + userInputBlue + ')'; 

        
        const newBox = `<div class="box" style="background-color: ${style}"></div>`
                 

        DOMSelectors.container.insertAdjacentHTML("beforeend", `${newBox}`)
        form.reset();
        event.preventDefault();
    })
       
}


function remove(){
    DOMSelectors.container.addEventListener("click", function (event) {
        if (event.target.classList.contains("box")) {
            DOMSelectors.container.removeChild(event.target);
            
        }
    });
    
}

click();

remove();