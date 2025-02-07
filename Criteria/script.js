document.getElementById('criteriaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const class10 = parseFloat(document.getElementById('class10').value);
    const class12 = parseFloat(document.getElementById('class12').value);

    if (class10 >= 80 && class12 >= 80) {
        document.getElementById('eligibility').value = 'Eligible';
    } else {
        document.getElementById('eligibility').value = 'Not Eligible';
    }
});
