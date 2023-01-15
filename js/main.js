let btn = document.querySelector(".mail .btnSubmit");
let mail = document.querySelector(".mail .zone-mail");
btn.onclick = (e) => {
    e.preventDefault();
    ValidateEmail(mail);
};

let text = document.createTextNode("Please provide a valid email");
let spanText = document.createElement("span");
spanText.append(text);
spanText.style = "font-size: 14px;color: var(--Soft-Red);position: absolute;bottom: -20px;left: 15px; display:none";
let mailZone = document.querySelector(".mail");
mailZone.appendChild(spanText);
let imgError = document.createElement("img");
imgError.src = "../images/icon-error.svg";
imgError.style = "position: absolute;right: 80px;top: 12px; display:none;"
mailZone.appendChild(imgError);



function ValidateEmail(input) {


    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input.value.match(validRegex)) {
        mail.style.borderColor = "var(--Soft-Red)";
        spanText.style.display = "block";
        imgError.style.display = "block";
    }

}


mail.onfocus = () => {
    spanText.style.display = "none";
    imgError.style.display = "none";
    mail.style.borderColor = "var(--Desaturated-Red)";

}
