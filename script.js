const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');
const button = document.getElementById('claim');
const warns = document.querySelectorAll('.warn');
const inputs = [firstName, lastName, password];

function validate() {
    for(input of inputs){
        if(input.value == ''){
            changeBox(input)
            return false;   
        } 
    };
    if(email.value.includes("@") == false || email.value.includes(".com") == false){
        // email.setAttribute("placeholder", "email@example/com")
        emailBox(email)
        return false;   
    }
};

function changeBox (a){
    let inside =  input.name + " cannot be empty"; 
    a.nextElementSibling.textContent = inside;
    a.setAttribute("required", "");
    a.focus();
}
function emailBox(a){
    email.setAttribute("placeholder", "email@example/com")
    a.nextElementSibling.textContent = " Looks like this is not an email";
    // place.style.color = 'hsl(0, 100%, 74%)';
    a.setAttribute("required", "");
    a.focus();
}


    // if(email.value.includes("@") == false || email.value.includes(".com") == false){
    //     email.nextElementSibling.textContent = 'Looks like this is not an email';
    //     email.setAttribute("required", "");
    //     email.setAttribute("placeholder", "email@example/com").style.color = 'hsl(0, 100%, 74%)';
    //     email.focus();
    //     return false;   
    // }
