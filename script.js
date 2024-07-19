// Function to save data to local storage
function saveToLocal() {
    const studentName = document.getElementById('name').value;
    const studentGender = document.getElementById('gender').value;
    const studentDOB = document.getElementById('dob').value;
    const studentAddress = document.getElementById('address').value;
    const studentPhone = document.getElementById('phone').value;
    const studentEmail = document.getElementById('email').value;

    const studentData = {
        name: studentName,
        gender: studentGender,
        dob: studentDOB,
        address: studentAddress,
        phone: studentPhone,
        email: studentEmail
    };

    localStorage.setItem('studentData', JSON.stringify(studentData));
    alert('Data saved to local storage');
}

// Function to retrieve data from local storage
function retrieveFromLocal() {
    const studentData = JSON.parse(localStorage.getItem('studentData'));
    const output = document.getElementById('output');

    if (studentData) {
        output.textContent = `Name: ${studentData.name}, Gender: ${studentData.gender}, DOB: ${studentData.dob}, Address: ${studentData.address}, Phone: ${studentData.phone}, Email: ${studentData.email}`;
    } else {
        output.textContent = 'No data in local storage';
    }
}

// Function to clear local storage
function clearLocal() {
    localStorage.clear();
    alert('Local storage cleared');
    document.getElementById('output').textContent = '';
}
