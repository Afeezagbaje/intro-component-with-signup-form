const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');
const button = document.getElementById('claim');
const warns = document.querySelectorAll('.warn');
const inputs = [firstName, lastName, password];

function validate() {
// i added firstName , lastName and password into an array called inputs, 
// so as to loop through them instead of typing or applying the code one by one.
// email was seperated because it's going to have a different wordings and placeholder when left blank 
    for(input of inputs){
        if(input.value == ''){
            changeBox(input)
            return false;   
        } 
    };
    // this is used to check if the users typed in an invalid email ie email without an @ and .
    if(email.value.includes("@") == false || email.value.includes(".") == false){
        emailBox(email)
        return false;   
    }
};

//this function is used to add required to the input tag been selected, so as to validate the input, then to add focus to the input if it's invalid and also show the warning
function changeBox (a){
    let inside =  input.name + " cannot be empty"; 
    a.nextElementSibling.textContent = inside;
    a.setAttribute("required", "");
    a.focus();
}
// this is similar to changeBox but a little different because of the different warning for the email input tag
function emailBox(a){
    email.setAttribute("placeholder", "email@example/com")
    a.nextElementSibling.textContent = " Looks like this is not an email";
    a.setAttribute("required", "");
    a.focus();
}
