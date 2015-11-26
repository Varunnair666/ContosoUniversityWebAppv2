document.addEventListener("DOMContentLoaded", function () {
    loadCourses();
});

function loadCourses() {
    CourseModule.getCourses(setupCoursesTable);
}

function setupCoursesTable(coursesList) {
    var courseTable = document.getElementById("coursesList");
    for (i = 0; i < coursesList.length; i++) {
        var row = document.createElement("tr");

        var cidcol = document.createElement("td");
        cidcol.innerHTML = coursesList[i].ID;
        row.appendChild(cidcol);

        var cncol = document.createElement("td");
        cncol.innerHTML = coursesList[i].CourseName;
        row.appendChild(cncol);

        var cdcol = document.createElement("td");
        cdcol.innerHTML = coursesList[i].CourseDesc;
        row.appendChild(cdcol);

        var dcol = document.createElement("td");
        dcol.innerHTML = coursesList[i].DepartmentID
        row.appendChild(dcol);

        var ccol = document.createElement("td");
        ccol.innerHTML = coursesList[i].Credits;
        row.appendChild(ccol);

        courseTable.appendChild(row);
    }
}