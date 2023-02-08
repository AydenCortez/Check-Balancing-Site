setInterval(function addInputs() {
    const inputTotal = (+document.getElementById('input1').value + +document.getElementById('input2').value + +document.getElementById('input3').value + +document.getElementById('input4').value).toLocaleString();
    const grossIncome = document.getElementById('totalInput');
    grossIncome.textContent = "$" + inputTotal;
}  , 100)

setInterval(function monthlyIncome (){
    // value variable 
    const monthlyIncome = (document.getElementById('annualInput').value / 12).toLocaleString();
    const monthlyOutput = document.getElementById('monthlyOutput');
    // text output
    monthlyOutput.textContent = "$" + monthlyIncome;
}, 100)

function calculateReductions (){
    const federalTax = document.getElementById('federalTax'); federalTax.textContent = "$" + (Math.round((document.getElementById('annualInput').value / 12) * 0.12)).toLocaleString();
    const stateTax = document.getElementById('stateTax'); stateTax.textContent = "$" + (Math.round((document.getElementById('annualInput').value / 12) * 0.07)).toLocaleString();
    const securityTax = document.getElementById('securityTax'); securityTax.textContent = "$" + (Math.round((document.getElementById('annualInput').value / 12) * 0.062)).toLocaleString();
    const medicareTax = document.getElementById('medicareTax'); medicareTax.textContent = "$" + (Math.round((document.getElementById('annualInput').value / 12) * 0.0145)).toLocaleString();
    const disabilityTax = document.getElementById('disabilityTax'); disabilityTax.textContent = "$" + (Math.round((document.getElementById('annualInput').value / 12) * 0.01)).toLocaleString();
    const retirementTax = document.getElementById('retirementTax'); retirementTax.textContent = "$" + (Math.round((document.getElementById('annualInput').value / 12) * 0.05)).toLocaleString();
    const medicalTax = document.getElementById('medicalTax'); medicalTax.textContent = "$" + 180;
    const totalReductions = (Math.round((document.getElementById('annualInput').value / 12) * 0.12)) + (Math.round((document.getElementById('annualInput').value / 12) * 0.07)) + (Math.round((document.getElementById('annualInput').value / 12) * 0.062)) + (Math.round((document.getElementById('annualInput').value / 12) * 0.0145)) + (Math.round((document.getElementById('annualInput').value / 12) * 0.01)) + (Math.round((document.getElementById('annualInput').value / 12) * 0.05)) + 180;
    const grossResult = document.getElementById('grossResult');
    grossResult.textContent = "$" + (document.getElementById('annualInput').value / 12).toLocaleString();
    const totalResult = document.getElementById('totalReductions');
    totalResult.textContent = "$" + totalReductions.toLocaleString();
    const netValue = Math.round((document.getElementById('annualInput').value / 12) - totalReductions);
    const netResult = document.getElementById('netResult');
    netResult.textContent = "$" + netValue.toLocaleString();
}
