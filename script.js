function calculate(pemdas) {
    
    var number1 = parseFloat(document.getElementById("first-number").value);
    var number2 = parseFloat(document.getElementById("second-number").value);
    // var pemdas = document.getElementByTagName("button").value;
    var result;
    console.log(pemdas)
    switch (pemdas) {
        case "Add!":
            result = number1 + number2;
            break;
        case "Subtract!":
            result = number1 - number2;
            break;
        case "Multiply!":
            result = number1 * number2;
            break;
        case "Divide!":
            result = number1 / number2;
            break;
        case "Reset":
            result = "";
            number1 = "";
            number2 = "";
            break;
        default:
            result = "";
        }
    console.log (result) 
    document.getElementById("result").value = result
    document.getElementById("first-number").value = number1
    document.getElementById("second-number").value = number2
        // = number1 + number2;
}