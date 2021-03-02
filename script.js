function calculate() {
    
    var number1 = parseFloat(document.getElementById("fnumber").value);
    var number2 = parseFloat(document.getElementById("snumber").value);
    var result = number1 + number2;
    
    document.getElementById("addresult").value = result;
}