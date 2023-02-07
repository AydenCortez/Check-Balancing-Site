setInterval(function addInputs() {
    const inputTotal = +document.getElementById('input1').value + +document.getElementById('input2').value + +document.getElementById('input3').value + +document.getElementById('input4').value;
    const grossIncome = document.getElementById('totalInput');
    grossIncome.textContent = inputTotal;
}  , 100)

setInterval(function monthlyIncome (){
    const monthlyIncome = document.getElementById('annualInput').value / 12;
    const monthlyOutput = document.getElementById('monthlyOutput');
    monthlyOutput.textContent = monthlyIncome;
}, 100)

function calculateReductions (){
    // const totalReductions = 
}
