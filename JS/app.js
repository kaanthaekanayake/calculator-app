let calculatedValue = 0;

function operation(operator){
    let userInput = document.getElementById('input-value');
    let inputValue = parseFloat(userInput.value);

    // Input Validation
    if(isNaN(inputValue)){
        alert('Please input value to calculate.');
        return;
    }

    // Calculation
    switch(operator){
        case '+':
            calculatedValue += inputValue; // calculatedValue = calculatedValue + inputValue
            break;
        case '-':
            calculatedValue -= inputValue;
            break;
        case '/':
            calculatedValue /= inputValue;
            break;
        case '*':
            calculatedValue *= inputValue;
            break;
        default:
            alert("Invalid Operation Type!");
            break;

    }

    // Clear the input field
    userInput.value = '';

    //Display results
    let outputValue = document.getElementById('output-value');
    outputValue.value = calculatedValue;
}
