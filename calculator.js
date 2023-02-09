setInterval(function addInputs() {
    const inputTotal = (+document.getElementById('input1').value + +document.getElementById('input2').value + +document.getElementById('input3').value + +document.getElementById('input4').value).toLocaleString();
    const grossIncome = document.getElementById('totalInput');
    grossIncome.textContent = "$" + inputTotal;
}  , 100)

setInterval(function monthlyIncome (){
    // value variable 
    const monthlyIncome = ((document.getElementById('annualInput').value / 12).toFixed(2)).toLocaleString();
    const monthlyOutput = document.getElementById('monthlyOutput');
    // text output
    monthlyOutput.textContent = "$" + monthlyIncome;
}, 100)

function calculateReductions (){
    // reduction values and text content
    const federalTax = document.getElementById('federalTax'); federalTax.textContent = "$" + (((document.getElementById('annualInput').value / 12) * 0.12).toFixed(2)).toLocaleString();
    const stateTax = document.getElementById('stateTax'); stateTax.textContent = "$" + (((document.getElementById('annualInput').value / 12) * 0.07).toFixed(2)).toLocaleString();
    const securityTax = document.getElementById('securityTax'); securityTax.textContent = "$" + (((document.getElementById('annualInput').value / 12) * 0.062).toFixed(2)).toLocaleString();
    const medicareTax = document.getElementById('medicareTax'); medicareTax.textContent = "$" + (((document.getElementById('annualInput').value / 12) * 0.0145).toFixed(2)).toLocaleString();
    const disabilityTax = document.getElementById('disabilityTax'); disabilityTax.textContent = "$" + (((document.getElementById('annualInput').value / 12) * 0.01).toFixed(2)).toLocaleString();
    const retirementTax = document.getElementById('retirementTax'); retirementTax.textContent = "$" + (((document.getElementById('annualInput').value / 12) * 0.05).toFixed(2)).toLocaleString();
    const medicalTax = document.getElementById('medicalTax'); medicalTax.textContent = "$" + 180;
    // reduction values added up
    const totalReductions = ((((document.getElementById('annualInput').value / 12) * 0.12)) + (((document.getElementById('annualInput').value / 12) * 0.07)) + (((document.getElementById('annualInput').value / 12) * 0.062)) + (((document.getElementById('annualInput').value / 12) * 0.0145)) + (((document.getElementById('annualInput').value / 12) * 0.01)) + (((document.getElementById('annualInput').value / 12) * 0.05)) + 180).toFixed(2);
    const grossResult = document.getElementById('grossResult');
    grossResult.textContent = "$" + ((document.getElementById('annualInput').value / 12).toFixed(2)).toLocaleString();
    // total reductions text content
    const totalResult = document.getElementById('totalReductions');
    totalResult.textContent = "$" + totalReductions.toLocaleString();
    // net value and net results
    const netValue = ((document.getElementById('annualInput').value / 12) - totalReductions).toFixed(2);
    const netResult = document.getElementById('netResult');
    netResult.textContent = "$" + netValue.toLocaleString();
}
