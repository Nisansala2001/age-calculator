document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user's date of birth input
    let dob = document.getElementById('dob').value;
    
    if (dob) {
        // Calculate the age
        let birthDate = new Date(dob);
        let currentDate = new Date();
        
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let month = currentDate.getMonth() - birthDate.getMonth();
        
        // Adjust for the month difference if the current month is before the birth month
        if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        // Display the result
        document.getElementById('age').textContent = age;
    } else {
        alert("Please select your date of birth.");
    }
});
