

const DOMSelectors = {
    button: document.querySelector("#button"),
    container: document.querySelector(".container"),
    inputRed: document.querySelector("#form-red"), //make separate inputs for each?!
    inputBlue: document.querySelector("#form-blue"),
    inputGreen: document.querySelector("#form-green"),
    h3s: document.querySelectorAll("h3")
}


const x = DOMSelectors.button.addEventListener("click", function () { //when the button is clicked

    const newBox = document.createElement("div"); //creates a new div for the box class <div class="box"></div>

    DOMSelectors.container.appendChild(newBox); //add child (the box) to the container
    
    newBox.classList.add("box"); //add a box to the class


    const userInputRed = DOMSelectors.inputRed.value; //input works! (can console log when submit is pressed)
    console.log(userInputRed); //now how to add style.. 

    const userInputGreen = DOMSelectors.inputGreen.value;
    console.log(userInputGreen); 

    const userInputBlue = DOMSelectors.inputBlue.value; 
    console.log(userInputBlue);

    newBox.style.backgroundColor = 'rgb(' + userInputRed + ',' + userInputGreen + ',' + userInputBlue + ')';
    
    form.reset();

    //console.log(Number(userInputRed) + Number(userInputGreen) + Number(userInputBlue)); //this works make the limit later
    if (Number(userInputRed) <= 255 && Number(userInputGreen) <= 255 && Number(userInputBlue) <= 255) { //alerts when user enters not valid rgb values
        console.log("yay")
      } else {
        console.log("no..")
        alert("hey those aren't valid rgb values")
      }

    newBox.addEventListener("click", function() { //when box is clicked
    
        DOMSelectors.container.removeChild(newBox); //remove the child of the container (which is the box in this case)
    });

    event.preventDefault();
});





/* DOMSelectors = {
    //stores all related code for selecting elements here
        form: document.querySelector("#form"),
        firstName: document.querySelector(".first-name"),
        h2s: document.querySelectorAll("h2"), //querySelector only grabs the first h2, querySelectorAll grabs all
    };
    
    DOMSelectors.form.addEventListener("submit", function(event) {
        event.preventDefault(); //prevents refresh
        DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.firstName.value); //h2s<- multiple h2
    });

 */
