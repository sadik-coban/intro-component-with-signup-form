const error_image_url = "images/icon-error.svg"
//Store if it is empty or not
let isFirstNameEmpty = true;
let isLastNameEmpty = true;
let isValidateEmail = true;
let isPasswordEmpty = true;
//Check if it is empty
function isEmpty(str) {
    return !str.trim().length;
}
//Check if email format is true
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Check and Navigate
function check(){
    if (isEmpty(document.getElementById("first-name-input").value)){
        document.getElementById("first-name-warning").innerHTML =  "First Name cannot be empty";
        document.getElementById("first-name-input").style.borderColor = "red";
        document.getElementById("first-name-input").style.backgroundImage = `url(${error_image_url})`;
        isFirstNameEmpty = true;
    }
    else{
        document.getElementById("first-name-warning").innerHTML =  "";
        document.getElementById("first-name-input").style.borderColor = "lightgray";
        document.getElementById("first-name-input").style.backgroundImage = `none`;
        isFirstNameEmpty = false;
    }
    if (isEmpty(document.getElementById("last-name-input").value)){
        document.getElementById("last-name-warning").innerHTML =  "Last Name cannot be empty";
        document.getElementById("last-name-input").style.borderColor = "red";
        document.getElementById("last-name-input").style.backgroundImage = `url(${error_image_url})`;
        isLastNameEmpty = true;
    }
    else{
        document.getElementById("last-name-warning").innerHTML =  "";
        document.getElementById("last-name-input").style.borderColor = "lightgray";
        document.getElementById("last-name-input").style.backgroundImage = `none`;
        isLastNameEmpty = false;
    }
    if (!validateEmail(document.getElementById("email-input").value)){
        document.getElementById("email-warning").innerHTML =  "Looks like this is not an email format";
        document.getElementById("email-input").style.borderColor = "red";
        document.getElementById("email-input").style.backgroundImage = `url(${error_image_url})`;
        isValidateEmail = true;
    }
    else{
        document.getElementById("email-warning").innerHTML =  "";
        document.getElementById("email-input").style.borderColor = "lightgray";
        document.getElementById("email-input").style.backgroundImage = `none`;
        isValidateEmail = false;
    }
    if (isEmpty(document.getElementById("password-input").value)){
        document.getElementById("password-warning").innerHTML =  "Password cannot be empty";
        document.getElementById("password-input").style.borderColor = "red";
        document.getElementById("password-input").style.backgroundImage = `url(${error_image_url})`;
        isPasswordEmpty = true;
    }
    else{
        document.getElementById("password-warning").innerHTML =  "";
        document.getElementById("password-input").style.borderColor = "lightgray";
        document.getElementById("password-input").style.backgroundImage = `none`;
        isPasswordEmpty = false;
    }
    if(isFirstNameEmpty == false && isLastNameEmpty == false && isValidateEmail == false && isPasswordEmpty == false){
        window.location.href = 'main-page.html';
        // If you wanted to change the page without it reflecting in the browser back history, you can do:
        // window.location.replace('...');
    }
}


