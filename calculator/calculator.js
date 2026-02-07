const display = document.getElementById('display');
//function to display the numbers on screen
function appendToDisplay(input) {
    display.value += input;
    
}
// function to clear screen
function clearDisplay() {
    display.value="";
    
}
// function to calculate the result
function calculate() {
    try {
         display.value = eval(display.value)
        
    } catch (error) {
        display.value="undefined"
        
    }
   
    
}