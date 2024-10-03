

// Event listener for Autofill submission button
document.querySelector('.btn-secondary').addEventListener('click', function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs)  {
        
        if (tabs.length === 0) {
            console.error("No active tab found.");
            return;
        }

        chrome.tabs.sendMessage(tabs[0].id, { action: "autofill" }, function(response) {
            console.log("email is here: ", response.result);            
    
        });
        
    });
});

