// When the form is submitted save the email and password to local storage
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Storing email into local storage
    const email = document.getElementById('email');

    // Storing Password into local storage
    const password = document.getElementById("password");

    // Setting chrome storage input
    chrome.storage.sync.set({'email': email.value, 'password': password.value, 'pressedSave':true}, function() {
        console.log('Settings saved');
      });

    

});


// Updating input form following asynchronous call 
function updateInformation(savedEmail, savedPassword) {

    const emailInput = document.getElementById('email');
    
    const passwordInput = document.getElementById('password');


    // Set email value from local storage if the field is empty
    if (emailInput.value === "" && savedEmail) {
        emailInput.value = savedEmail;
       
    }

    // Setting the Password from local storage
    if (passwordInput.value === "" && savedPassword) {
        passwordInput.value = savedPassword;

    }

}


// Check local storage and autofill email if available and the field is empty
window.onload = function () {

    chrome.storage.sync.get(['email', 'password'], function(items) {

        const savedEmail = items.email || ""; 
        const savedPassword = items.password || "";
        updateInformation(savedEmail, savedPassword);
      });


    
};