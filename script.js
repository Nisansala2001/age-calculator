document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear any previous error message
    document.getElementById('error').textContent = '';

    // Get the user's date of birth input
    let dob = document.getElementById('dob').value;
    
    if (!dob) {
        document.getElementById('error').textContent = 'Please select a valid date of birth.';
        return;
    }

    // Calculate the age
    let birthDate = new Date(dob);
    let currentDate = new Date();
    
    // Ensure that the selected date is in the past
    if (birthDate > currentDate) {
        document.getElementById('error').textContent = 'Date of birth cannot be in the future.';
        return;
    }

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    
    // Adjust for the month difference if the current month is before the birth month
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('age').textContent = age;
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('clearBtn').addEventListener('click', function() {
    // Clear the input field and result
    document.getElementById('dob').value = '';
    document.getElementById('age').textContent = '';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('error').textContent = '';
});
