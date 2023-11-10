function downloadFile() {
    const fileUrl = 'path/to/file';
    
    const link = document.createElement('a');

    link.download = 'downloadApplication';

    link.href = fileUrl;

    document.body.appendChild(link);

    link.click();
}

document.getElementById('downloadButton').addEventListener('click', downloadFile);

function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var passwordConfirmation = document.getElementById('passwordConfirmation').value;

    if (username === '' || email === '' || password === '' || passwordConfirmation === '') {
        alert('All fields must be filled out');
        return;
    }

    if (password !== passwordConfirmation) {
        alert('Passwords do not match');
        return;
    }

    alert('Signup successful!');
}