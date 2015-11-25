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
        fncol.innerHTML = studentsList[i].FirstName;
        row.appendChild(fncol);

        var lncol = document.createElement("td");
        lncol.innerHTML = studentsList[i].LastName;
        row.appendChild(lncol);

        var ccol = document.createElement("td");
        ccol.innerHTML = studentsList[i].EnrollmentDate;
        row.appendChild(ccol);

        var ecol = document.createElement("td");
        ecol.innerHTML = "<a href=\"StudentEdit.html\">Edit</a>";
        row.appendChild(ecol);

        var dcol = document.createElement("td");
        ecol.innerHTML = "Delete";
        row.appendChild(dcol);

        studentTable.appendChild(row);
    }
}