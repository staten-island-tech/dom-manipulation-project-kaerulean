
const DOMSelectors = {
    button: document.querySelector("#button"),
    container: document.querySelector(".container"),
    remove: document.querySelector("#remove"),
    box: document.querySelectorAll(".box"),
    inputRed: document.querySelector("#form-red"), //make separate inputs for each?!
    inputBlue: document.querySelector("#form-blue"),
    inputGreen: document.querySelector("#form-green"),
    h3s: document.querySelectorAll("h3")
}

function click(){
    DOMSelectors.button.addEventListener("click", function(event){
        const userInputRed = DOMSelectors.inputRed.value;
        console.log(userInputRed); 
    
        const userInputGreen = DOMSelectors.inputGreen.value;
        console.log(userInputGreen); 
    
        const userInputBlue = DOMSelectors.inputBlue.value; 
        console.log(userInputBlue);
        
        //DOMSelectors.box.style.backgroundColor = 'rgb(' + userInputRed + ',' + userInputGreen + ',' + userInputBlue + ')'; 
    
        DOMSelectors.container.insertAdjacentHTML("beforeend", `<div class = "box"></div>`)
    
        event.preventDefault();
        
       

    })
       
}


function remove(){
    DOMSelectors.box.addEventListener("click", function() {
        
    });
}


click();
remove();