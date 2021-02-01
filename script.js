const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');
const button = document.getElementById('claim');
const warns = document.querySelectorAll('.warn');
const inputs = [firstName, lastName, email, password];

function validate() {
    for(input of inputs){
        if(input.value == ''){
            let inside =  input.name + " cannot be empty"; 
            input.nextElementSibling.textContent = inside;
            input.setAttribute("required", "");
            input.focus();
            return false;   
        } else if(input.value !== ''){
            input.removeAttribute("required", ""); 
            input.nextElementSibling.textContent = '';              
        } 
    };
};

    // if(email.value.includes("@") == false || email.value.includes(".com") == false){
    //     email.nextElementSibling.textContent = 'Looks like this is not an email';
    //     email.setAttribute("required", "");
    //     email.setAttribute("placeholder", "email@example/com").style.color = 'hsl(0, 100%, 74%)';
    //     email.focus();
    //     return false;   
    // }
