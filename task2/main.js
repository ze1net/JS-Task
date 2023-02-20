function outputNumbers() {
    // Get the input value
    var inputNumber = parseInt(document.getElementById("number").value);
    
    // Clear the output
    document.getElementById("odd").innerHTML = "";
    document.getElementById("even").innerHTML = "";
    
    // Output the even numbers
    document.getElementById("even").innerHTML;
    for (var i = 1; i <= inputNumber; i++) {
        if (i % 2 === 0) {
            document.getElementById("even").innerHTML += i + " ";
        }
    }
    
    // Output the odd numbers
    document.getElementById("odd").innerHTML;
    for (var i = 1; i <= inputNumber; i++) {
        if (i % 2 === 1) {
            document.getElementById("odd").innerHTML += i + " ";
        }
    }
}