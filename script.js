const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
    if (number == "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currDisplay.innerText == "" ) return;
    compute(operand);
    operation = operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText=currDisplay.innerText;
    currDisplay.innerText="";
    }
    function clearDisplay() {
        currDisplay.innerText="";
        prevDisplay.innerText="";
    }
    function compute(operand) {
        let result;
        const previousvalue = parseFloat(prevDisplay.innerText);
        const currentvalue = parseFloat(currDisplay.innerText);

        if (isNaN(previousvalue)|| isNaN(currentvalue)) return;

        switch (operation) {
            case "+":
                result = previousvalue+currentvalue;
                break;
            case "-":
                result=previousvalue-currentvalue;
                break;
            case "*":
                result=previousvalue*currentvalue;
                break;
            case "/":
                result=previousvalue/currentvalue;
                break;
            default:
                return;            
        }
        currDisplay.innerText=result;
    }

    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        appendNumber(number.innerText);
      });
    });

    operations.forEach((operation) => {
       operation.addEventListener("click", () => {
        chooseOperation(operation.innerText);
       });
    });

    clearBtn.addEventListener("click", () => {
        clearDisplay();
    });

    equalBtn.addEventListener("click", () => {
       compute();
       prevDisplay.innerText="";
    });

    deleteBtn.addEventListener("click", () => {
        currDisplay.innerText=currDisplay.innerText.slice(0,-1);
    });