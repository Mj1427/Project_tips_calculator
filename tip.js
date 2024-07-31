function calculateTip() {
    // Get the bill amount and tip percentage from the input fields
    const amount = parseFloat(document.getElementById('amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    // Validate inputs
    if (isNaN(amount) || isNaN(tipPercentage) || amount <= 0 || tipPercentage < 0) {
        alert('Please enter valid amounts.');
        return;
    }

    // Calculate tip and total amounts
    const tipAmount = (amount * (tipPercentage / 100)).toFixed(2);
    const totalAmount = (amount + parseFloat(tipAmount)).toFixed(2);

    // Update the result in the HTML
    document.getElementById('tip-amount').textContent = `$${tipAmount}`;
    document.getElementById('total-amount').textContent = `$${totalAmount}`;
}
