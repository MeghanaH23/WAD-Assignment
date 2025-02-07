document.getElementById('vehicleLoanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseFloat(document.getElementById('years').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;

    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();

    if (age < 18) {
        alert('You must be 18 or older to apply for a loan.');
        return;
    }

    const n = years * 12; // Total number of payments
    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -n));

    if (!isNaN(monthlyPayment) && (monthlyPayment != Infinity) && (monthlyPayment != -Infinity)) {
        document.getElementById('monthly-payment').value = monthlyPayment.toFixed(2);
    } else {
        alert('Please enter valid inputs');
    }
});
