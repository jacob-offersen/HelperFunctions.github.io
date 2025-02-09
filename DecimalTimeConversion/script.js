function convertToDecimal() {
    let hours = parseFloat(document.getElementById('hours').value) || 0;
    let minutes = parseFloat(document.getElementById('minutes').value) || 0;
    let seconds = parseFloat(document.getElementById('seconds').value) || 0;
    let decimalHours = hours + (minutes / 60) + (seconds / 3600);
    document.getElementById('decimalTime').textContent = decimalHours.toFixed(4);
}

function convertToStandard() {
    let decimalHours = parseFloat(document.getElementById('decimalInput').value) || 0;
    let hours = Math.floor(decimalHours);
    let minutes = Math.floor((decimalHours - hours) * 60);
    let seconds = Math.round(((decimalHours - hours) * 60 - minutes) * 60);
    document.getElementById('standardTime').textContent = `${hours}h ${minutes}m ${seconds}s`;
}

// Attach event listeners to input fields to trigger conversion on input change
document.getElementById('hours').addEventListener('input', convertToDecimal);
document.getElementById('minutes').addEventListener('input', convertToDecimal);
document.getElementById('seconds').addEventListener('input', convertToDecimal);
document.getElementById('decimalInput').addEventListener('input', convertToStandard);
