document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseFloat(document.getElementById('years').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;

    const n = years * 12; // Total number of payments
    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -n));

    if (!isNaN(monthlyPayment) && (monthlyPayment != Infinity) && (monthlyPayment != -Infinity)) {
        document.getElementById('monthly-payment').value = monthlyPayment.toFixed(2);
    } else {
        alert('Please enter valid inputs');
    }
});