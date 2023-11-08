
const DOMSelectors = { //stores and gets all the html element stuff
    button: document.querySelector("#button"),
    container: document.querySelector(".container"),
    remove: document.querySelector("#remove"),
    inputRed: document.querySelector("#form-red"), //make separate inputs for each?!
    inputBlue: document.querySelector("#form-blue"),
    inputGreen: document.querySelector("#form-green"),
    h3s: document.querySelectorAll("h3") //i dont even why this is here but i'm keeping it for funsies
}


function click(){
    DOMSelectors.button.addEventListener("click", function(event){ //when clicked
        const userInputRed = DOMSelectors.inputRed.value; //gets the value of whatever the user put into the "red"
        console.log(userInputRed); //console log was just for testing to made sure it worked
    
        const userInputGreen = DOMSelectors.inputGreen.value;//gets the value of whatever the user put into the "green"
        console.log(userInputGreen); 
    
        const userInputBlue = DOMSelectors.inputBlue.value; //gets the value of whatever the user put into the "blue"
        console.log(userInputBlue);
        
        
        if (Number(userInputRed) <= 255 && Number(userInputGreen) <= 255 && Number(userInputBlue) <= 255) { //valid rgb values max at 225, so everything over 225 is invalid
            console.log("yay") 
          } else {
            alert("hey those aren't valid rgb values")//alerts when user enters not valid rgb values (notification pops up)
            return click()//cancels the function so that it doesn't generate a random color
          }

        const style = 'rgb(' + userInputRed + ',' + userInputGreen + ',' + userInputBlue + ')'; //stores the user input into rgb 

        
        const newBox = `<div class="box" style="background-color: ${style}"></div>` //the new box class that we're going to create 
                 

        DOMSelectors.container.insertAdjacentHTML("beforeend", `${newBox}`) //inserts a div class called box into the container div
        form.reset(); //clears the input fields
        event.preventDefault(); //prevents the page from refreshing
    })
       
}


function remove(){
    DOMSelectors.container.addEventListener("click", function (event) { //if i click something in the container class
        if (event.target.classList.contains("box")) { //and the div class = box
            DOMSelectors.container.removeChild(event.target); //then remove that child from the container div
            
        }
    });
    
}

click(); //calls the click function so that it works

remove(); //calls the remove function so that it works


/* function remove(){
    let buttons = document.querySelectorAll("button"); //buttons in list for html
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(event){
            console.log(event.target.parentElement.parentElement);
        })
    })
}

remove() */