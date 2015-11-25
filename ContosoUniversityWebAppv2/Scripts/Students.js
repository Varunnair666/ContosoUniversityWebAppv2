document.addEventListener("DOMContentLoaded", function () {
    //alert("In student.js");
    loadStudents();
});

function loadStudents() {
    StudentModule.getStudents(setupStudentsTable);
}

function setupStudentsTable(studentsList) {
    var studentTable = document.getElementById("studentsList");

    for (i = 0; i < studentsList.length; i++) {
        var row = document.createElement("tr");

        var fncol = document.createElement("td");
        fncol.innerHTML = studentsList[i].name;
        row.appendChild(fncol);

        var lncol = document.createElement("td");
        lncol.innerHTML = studentsList[i].surname;
        row.appendChild(lncol);

        var ccol = document.createElement("td");
        ccol.innerHTML = studentsList[i].country;
        row.appendChild(ccol);

        studentTable.appendChild(row);
    }
}