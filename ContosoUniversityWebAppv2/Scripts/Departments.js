document.addEventListener("DOMContentLoaded", function () {
    loadDepartments();
});

function loadDepartments() {
    DepartmentModule.getDepartments(setupDepartmentsTable);
}


function setupDepartmentsTable(departmentsList) {
    var departmentTable = document.getElementById("departmentsList");
    //var coursesList = CourseModule.getCourses(callbackFunction);

    for (i = 0; i < departmentsList.length; i++) {
        var row = document.createElement("tr");

        var dncol = document.createElement("th");
        dncol.innerHTML = departmentsList[i].DepartmentName;
        row.appendChild(dncol);
        //departmentTable.appendChild(row);
        //row.removeChild(dncol);
        
        var ddcol = document.createElement("td");
        ddcol.innerHTML = departmentsList[i].DepartmentDesc;
        row.appendChild(ddcol);
        departmentTable.appendChild(row);
        /*row.removeChild(ddcol);
        var ccol = document.createElement("th");
        ccol.innerHTML = "Courses:";
        row.appendChild(ccol);

        //CourseModule.getCourses(callbackFunction);

        for (j = 0; j < coursesList.length; j++) {
            if (coursesList[j].DepartmentID == departmentsList[i].ID) {
                var c = document.createElement("td");
                c.innerHTML = coursesList[j].CourseName;
                row.appendChild(c);
            }
        }        

        departmentTable.appendChild(row);*/
    }
}

