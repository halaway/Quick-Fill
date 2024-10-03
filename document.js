
// Auto filling webpage 
function autoFillForm(savedEmail, savedPassword){


        // Querying Input Labels
        let emailInput = document.querySelector('input[data-automation-id="email"]');
        let firstPassword = document.querySelector('input[data-automation-id="password"]');
        let secondPassword = document.querySelector('input[data-automation-id="verifyPassword"]');

        if (emailInput) {
            
            setTimeout(() => {
                emailInput.value = savedEmail; 

                emailInput.dispatchEvent(new Event('input', { bubbles: true }));
                emailInput.dispatchEvent(new Event('change', { bubbles: true }));
                emailInput.dispatchEvent(new Event('blur', { bubbles: true }));
                },500 );

        }
        if (firstPassword){

            firstPassword.value = savedPassword;

            firstPassword.dispatchEvent(new Event('input', { bubbles: true }));
            firstPassword.dispatchEvent(new Event('change', { bubbles: true }));
            firstPassword.dispatchEvent(new Event('blur', { bubbles: true }));
        }

        if(secondPassword){


            setTimeout(() => {
            
            secondPassword.value = savedPassword;

            secondPassword.dispatchEvent(new Event('input', { bubbles: true }));
            secondPassword.dispatchEvent(new Event('change', { bubbles: true }));
            secondPassword.dispatchEvent(new Event('blur', { bubbles: true }));


            },500);
        }
   
}


// Listener that responds to AutoFill button
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.action === "autofill") {
            chrome.storage.sync.get(['email', 'password', 'pressedSave'], function(items) {
                
                // Auto Filling form only if save is pressed
                if ( items.pressedSave == true ){
                    const savedEmail = items.email; 
                    const savedPassword = items.password;
                    autoFillForm(savedEmail, savedPassword);
                }
                
                sendResponse({ result: "Completed" });
            });
        
        }    
        
        return true;
    }
);



chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'https://icf.wd5.myworkdayjobs.com/en-US/ICFExternal_Career_Site/job/Albany%2C-NY/Associate-Software-Engineer_R2403756/apply/autofillWithResume?utm_source=cvrve'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });


