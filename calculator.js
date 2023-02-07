function addInputs() {
    var inputTotal = +document.getElementById('input1').value + +document.getElementById('input2').value + +document.getElementById('input3').value + +document.getElementById('input4').value;
    var grossIncome = document.getElementById("totalInput");
    grossIncome.textContent += inputTotal;
}   

