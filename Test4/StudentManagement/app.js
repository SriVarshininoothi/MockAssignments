//inputs


let nameInput = document.getElementById("name");
let marksInput = document.getElementById("marks");
let form = document.getElementById("myform");

let nameError = document.getElementById("nameError");
let marksError = document.getElementById("marksError");

let add = document.getElementById("add");
let display = document.getElementById("display");
let search = document.getElementById("search");
let average = document.getElementById("average");
let topper = document.getElementById("topper");


//regex

let nameregex = /^[A-Za-z0-9 ]+$/;
let marksregex = /^(100|[0-9]{1,2})$/;

//add students

let students = [];

form.addEventListener("submit",function(e){

    e.preventDefault();

    let name = nameInput.value.trim();
    let marks = marksInput.value.trim();
    
    if(!nameregex.test(name)){
        nameError.textContent = "Enter Valid Name";
        nameError.classList.add("red");
        nameError.classList.remove("green");
        return;

    }else{
        nameError.classList.add("green");
        nameError.classList.remove("red");
    }

    if(!marksregex.test(marks)){
        marksError.textContent = "Enter Valid marks";
        marksError.classList.add("red");
        marksError.classList.remove("green");
        return;

    }else{
        marksError.classList.add("green");
        marksError.classList.remove("red");
    }


    let student = {

        "name":name,
        "marks":Number(marks)
    };

    students.push(student);

    addStudents();

    form.reset();


});

function addStudents(){

    let innerHtml = "";

    for(let i=0;i<students.length;i++){

        innerHtml += `
        <li style="margin-top:20px;"> 
        Name: ${students[i].name}
        Marks: ${students[i].marks}
        </li>
        `;

    }
    display.innerHTML = innerHtml;

}