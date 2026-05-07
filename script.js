let students = [];
let editIndex = -1;

// LOGIN FUNCTION
:::writing{variant="standard" id="59317"}
function login() {

  let email =
    document.getElementById("email").value.trim();

  let password =
    document.getElementById("password").value.trim();

  if (
    email === "parfullchittora2000@gmail.com" &&
    password === "1234"
  ) {

    alert("Login Success");

    document.getElementById("loginPage")
      .style.display = "none";

    document.getElementById("studentPage")
      .style.display = "block";

  } else {

    alert("Invalid Email or Password");

  }
}
// ADD STUDENT
function addStudent() {

let name =
document.getElementById("name").value;

let course =
document.getElementById("course").value;

if(name === "" || course === "") {

alert("Fill all fields");
return;

}

students.push({name, course});

displayStudents();

document.getElementById("name").value = "";
document.getElementById("course").value = "";
}

// DISPLAY STUDENTS
function displayStudents() {

let list =
document.getElementById("list");

list.innerHTML = "";

students.forEach((s, index) => {

let li =
  document.createElement("li");

li.innerHTML = `
  ${s.name} - ${s.course}

  <div>
    <button onclick="editStudent(${index})">
      Edit
    </button>

    <button class="delete-btn"
    onclick="deleteStudent(${index})">
      Delete
    </button>
  </div>
`;

list.appendChild(li);

});
}

// DELETE STUDENT
function deleteStudent(index) {

students.splice(index, 1);

displayStudents();
}

// EDIT STUDENT
function editStudent(index) {

let s = students[index];

document.getElementById("name").value =
s.name;

document.getElementById("course").value =
s.course;

editIndex = index;
}

// UPDATE STUDENT
function updateStudent() {

if(editIndex === -1) return;

students[editIndex].name =
document.getElementById("name").value;

students[editIndex].course =
document.getElementById("course").value;

editIndex = -1;

displayStudents();
}
