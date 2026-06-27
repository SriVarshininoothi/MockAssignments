
// input

const nameInput =  document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const form = document.getElementById("myForm");
const button = document.getElementById("button");

//error message

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

// regex

const nameregex = /^[A-Za-z0-9 ]+$/;
const emailregex = /^[a-zA-Z0-9.%&]+@[a-zA-Z0-9.+-]+\.[a-z]{2,}$/;
const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@>$%#^&]).{8,}$/;

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passInput.value.trim();
    
    // 1. Name Validation
    if (!nameregex.test(name)) {
        nameError.textContent = "Enter Valid Name";
        nameError.classList.add("red");
        nameError.classList.remove("green");
    } else {
        nameError.textContent = "Looks good!";
        nameError.classList.add("green");
        nameError.classList.remove("red");
    }

    // 2. Email Validation
    if (!emailregex.test(email)) {
        emailError.textContent = "Enter Valid Email";
        emailError.classList.add("red");
        emailError.classList.remove("green");
    } else {
        emailError.textContent = "Looks good!";
        emailError.classList.add("green");
        emailError.classList.remove("red");
    }

    // 3. Password Validation
    if (!passregex.test(password)) {
        passError.textContent = "Enter Valid Password";
        passError.classList.add("red");
        passError.classList.remove("green");
    } else {
        passError.textContent = "Looks good!";
        passError.classList.add("green");
        passError.classList.remove("red");
    }

    if(!nameError.textContent=== "" && !passError.textContent === "" && !emailError === ""){
        alert("No error message present!");
        form.submit();
    }




});


