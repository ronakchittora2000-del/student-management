let students = [];
let users = [];
let editIndex = -1;

// LOGIN FUNCTIONS
function signup() {
let name = document.getElementById("signupName").value;
let email = document.getElementById("signupEmail").value;
let password = document.getElementById("signupPassword").value;

if(name === "" || email === "" || password === "") {
alert("Fill all fields");
return;
}

users.push({name, email, password});
alert("Signup Successful");
}

function login() {
let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let user = users.find(
u => u.email === email && u.password === password
);

if(user) {
alert("Login Success");
showStudent();
} else {
alert("Invalid Credentials");
}
}

// STUDENT FUNCTIONS
function addStudent() {
let name = document.getElementById("name").value;
let course = document.getElementById("course").value;

if(name === "" || course === "") {
alert("Fill all fields");
return;
}

students.push({name, course});
displayStudents();

document.getElementById("name").value = "";
document.getElementById("course").value = "";
}

function displayStudents() {
let list = document.getElementById("list");
list.innerHTML = "";

students.forEach((s, index) => {
let li = document.createElement("li");

```
li.innerHTML = `
  ${s.name} - ${s.course}
  <div>
    <button onclick="editStudent(${index})">Edit</button>
    <button class="delete-btn"
    onclick="deleteStudent(${index})">
    Delete
    </button>
  </div>
`;

list.appendChild(li);
```

});
}

function deleteStudent(index) {
students.splice(index, 1);
displayStudents();
}

function editStudent(index) {
let s = students[index];

document.getElementById("name").value = s.name;
document.getElementById("course").value = s.course;

editIndex = index;
}

function updateStudent() {
if(editIndex === -1) return;

students[editIndex].name =
document.getElementById("name").value;

students[editIndex].course =
document.getElementById("course").value;

editIndex = -1;
displayStudents();
}

// PAGE SWITCH
function showStudent() {
document.getElementById("studentSection")
.style.display = "block";

document.getElementById("loginSection")
.style.display = "none";
}

function showLogin() {
document.getElementById("studentSection")
.style.display = "none";

document.getElementById("loginSection")
.style.display = "block";
}

