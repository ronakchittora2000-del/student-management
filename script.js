let students = [];
let editIndex = -1;

function addStudent() {
let name = document.getElementById("name").value;
let course = document.getElementById("course").value;

if (name === "" || course === "") {
alert("Fill all fields");
return;
}

students.push({ name, course });
displayStudents();

document.getElementById("name").value = "";
document.getElementById("course").value = "";
}

function displayStudents() {
let list = document.getElementById("list");
list.innerHTML = "";

if (students.length === 0) {
list.innerHTML = "<p>No students added</p>";
return;
}

students.forEach((s, index) => {
let li = document.createElement("li");
li.innerHTML = `       ${s.name} - ${s.course}       <div>        <button onclick="editStudent(${index})">Edit</button> <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>

    `;
list.appendChild(li);
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
if (editIndex === -1) return;

students[editIndex].name = document.getElementById("name").value;
students[editIndex].course = document.getElementById("course").value;

editIndex = -1;
displayStudents();
}

