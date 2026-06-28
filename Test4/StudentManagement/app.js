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

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = nameInput.value.trim();
    let marks = marksInput.value.trim();

    if (!nameregex.test(name)) {
        nameError.textContent = "Enter Valid Name";
        nameError.classList.add("red");
        nameError.classList.remove("green");
        return;

    } else {
        nameError.classList.add("green");
        nameError.classList.remove("red");
    }

    if (!marksregex.test(marks)) {
        marksError.textContent = "Enter Valid marks";
        marksError.classList.add("red");
        marksError.classList.remove("green");
        return;

    } else {
        marksError.classList.add("green");
        marksError.classList.remove("red");
    }


    let student = {

        "name": name,
        "marks": Number(marks)
    };

    students.push(student);

    addStudents();

    form.reset();


});


//add
function addStudents() {


        alert("Added students successfully!")
    
};

//display

display.addEventListener("click", function () {

    if (students.length === 0) {
        alert("No students found.");
        return;
    }

    let result = `
    <table border ="1" style="width:60%; text-align:left; border-collapse:collapse;margin-top:15px;">
    <thead>

        <tr style="background-color: #f2f2f2;">
            <th style ="padding:8px;">Name</th>
            <th style="padding:8px;">Marks</th>
        </tr>
    </thead>
    <tbody>
    
    `;

    for (let i = 0; i < students.length; i++) {

        result += `

        <tr>
            <td style ="padding:8px;">${students[i].name} </td>
            <td style ="padding:8px;">${students[i].marks} </td>
            
        </tr>
        
        
        `;
    }

    result += `
    </tbody>
    </table>
    
    `;

    document.getElementById("studentList").innerHTML = result;

});

//search

search.addEventListener("click", function () {

    if (students.length === 0) {
        alert("No students to search");
        return;
    }

    let searchName = prompt("Enter student name to search: ");
    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === searchName.trim().toLowerCase()) {
            alert("Student Found!\nName: " + students[i].name + "\nMarks: " + students[i].marks);
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Student not found");
    }

});

