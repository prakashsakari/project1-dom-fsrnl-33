const firstNameEle = document.querySelector(".fn");
const lastNameEle = document.querySelector(".ln");
const emailEle = document.querySelector(".email");
const passwordEle = document.querySelector(".password");
const btnSubmitEle = document.querySelector(".btn-submit");

const formEle = document.querySelector("#form");
const message = document.querySelector(".message");

let fn="";
let ln = "";
let emailId = "";
let password = "";

firstNameEle.addEventListener("keyup", (event) => {
    fn = event.target.value;
})

lastNameEle.addEventListener("keyup", (event) => {
    ln = event.target.value;
})

emailEle.addEventListener("keyup", (event) => {
    emailId = event.target.value;
})

passwordEle.addEventListener("keyup", (event) => {
    password = event.target.value;
})

formEle.addEventListener("submit", (event) => {
    event.preventDefault();
})

btnSubmitEle.addEventListener('click', () => {
    if (fn.length>0 && ln.length>0 && emailId.length>0 && password.length>0){
        message.innerText = "Form Submitted"
    }
})