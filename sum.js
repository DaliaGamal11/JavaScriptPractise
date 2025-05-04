function summ() {
    var sum = 0;
    var number = null; 
    
    alert("Enter numbers to sum. Enter 0 to stop and get the total sum.");
    while (number !== 0) {
        var input = prompt("Enter a number (0 to finish):");
        
        // Check if user clicked cancel
        if (input === null) {
            alert("You canceled. The current sum is: " + sum);
            return sum;
        }
        
        // Convert to number 
        number = parseFloat(input);
        
        // Validate input
        if (!isFinite(number)) {
            alert("Please enter a valid number.");
            number = null; // Reset to ensure loop continues
        } else if (number !== 0) {
            sum += number; // Add to sum if not 0
        }
    }
    
    alert("The sum of all entered numbers is: " + sum);
    return sum;
}

summ();