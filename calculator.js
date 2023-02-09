setInterval(function addInputs() {
    const inputTotal = (+document.getElementById('input1').value + +document.getElementById('input2').value + +document.getElementById('input3').value + +document.getElementById('input4').value).toLocaleString();
    const grossIncome = document.getElementById('totalInput');
    grossIncome.textContent = "$" + inputTotal.toLocaleString(undefined, {maximumFractionDigits: 2})
}  , 100)

setInterval(function monthlyIncome (){
    // value variable 
    const monthlyIncome = (document.getElementById('annualInput').value / 12);
    const monthlyOutput = document.getElementById('monthlyOutput');
    // text output
    monthlyOutput.textContent = "$" + monthlyIncome.toLocaleString(undefined, {maximumFractionDigits: 2});
}, 100)

function calculateReductions (){
    // reduction values and text content
    const grossResultValue = document.getElementById('annualInput').value / 12;
    const federalTax = document.getElementById('federalTax'); federalTax.textContent = "$" + (grossResultValue * 0.12).toLocaleString(undefined, {maximumFractionDigits: 2});
    const stateTax = document.getElementById('stateTax'); stateTax.textContent = "$" + (grossResultValue * 0.07).toLocaleString(undefined, {maximumFractionDigits: 2});
    const securityTax = document.getElementById('securityTax'); securityTax.textContent = "$" + (grossResultValue * 0.062).toLocaleString(undefined, {maximumFractionDigits: 2});
    const medicareTax = document.getElementById('medicareTax'); medicareTax.textContent = "$" + (grossResultValue * 0.0145).toLocaleString(undefined, {maximumFractionDigits: 2});
    const disabilityTax = document.getElementById('disabilityTax'); disabilityTax.textContent = "$" + (grossResultValue * 0.01).toLocaleString(undefined, {maximumFractionDigits: 2});
    const retirementTax = document.getElementById('retirementTax'); retirementTax.textContent = "$" + (grossResultValue * 0.05).toLocaleString(undefined, {maximumFractionDigits: 2});
    const medicalTax = document.getElementById('medicalTax'); medicalTax.textContent = "$" + 180;
    // reduction values added up
    const totalReductions = (grossResultValue * 0.12) + (grossResultValue * 0.07) + (grossResultValue * 0.062) + (grossResultValue * 0.0145) + (grossResultValue * 0.01) + (grossResultValue * 0.05) + 180;
    const grossResult = document.getElementById('grossResult');
    grossResult.textContent = "$" + grossResultValue.toLocaleString(undefined, {maximumFractionDigits: 2});
    // total reductions text content
    const totalResult = document.getElementById('totalReductions');
    totalResult.textContent = "$" + totalReductions.toLocaleString(undefined, {maximumFractionDigits: 2});
    // net value and net results
    const netValue = (grossResultValue - totalReductions);
    const netResult = document.getElementById('netResult');
    netResult.textContent = "$" + netValue.toLocaleString(undefined, {maximumFractionDigits: 2});
}
