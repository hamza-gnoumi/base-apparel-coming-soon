
let mail = document.querySelector(".mail .zone-mail");
let mailZone = document.querySelector(".mail");
let imgError = document.querySelector(".input-control .imgError");



mailZone.addEventListener('submit', e => {
    e.preventDefault();
    ValidateEmail(mail);
});



let setError = (element) => {
    let inputcontrol = element.parentElement;
    let errorDisplay = inputcontrol.querySelector(".error");
    // Add Icon Error
    imgError.style.display = "block"
    //Add Msg Error
    errorDisplay.innerText = "Please provide a valid email";
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
};
let setSuccess = element => {
    let inputcontrol = element.parentElement;
    let errorDisplay = inputcontrol.querySelector(".error");
    // remove Icon Error
    imgError.style.display = "none"
    //remove Msg Error
    errorDisplay.innerText = "";
    inputcontrol.classList.remove('error');
    inputcontrol.classList.add('success');
};

function ValidateEmail(input) {
    emailvalue = input.value.trim();

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailvalue === "" || !emailvalue.match(validRegex)) {
        setError(input);
    } else {
        setSuccess(input);
    }


}


