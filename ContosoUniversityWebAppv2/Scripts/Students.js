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

        var dcol = document.createElement("td");
        dcol.innerHTML = "Delete";
        row.appendChild(dcol);

        var ecol = document.createElement("td");
        var a = document.createElement('a');
        var linkText = document.createTextNode("Edit");
        a.appendChild(linkText);
        a.title = "Edit";
        a.href = "StudentEdit.html?id=" + studentsList[i].ID;
        //a.setAttribute("href", "StudentEdit.html");
        //a.innerHTML = "Edit";
        //ecol.innerHTML = a;
        //ecol.innerHTML = "<a href=\"StudentEdit.html\">Edit</a>";
        //ecol.appendChild(a);
        row.appendChild(a);

        studentTable.appendChild(row);
    }
}