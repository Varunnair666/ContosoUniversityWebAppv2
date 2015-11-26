document.addEventListener("DOMContentLoaded", function () {
    //alert("In student.js");
    //var sid = getUrlParameters("id", "", true);
    //alert("Hello!");
    document.getElementById("submit").addEventListener("click", function () {
        var enrollmentTable = document.getElementById("enrollmentsList");
        var enrollmentTable2 = document.getElementById("enrollmentsList2");
        //var data = localStorage.getItem("Temp");

        //var theader = document.createElement("thead");
        var rowh = document.createElement("tr");
        var ch1 = document.createElement("th");
        ch1.innerHTML = "Student ID:";
        rowh.appendChild(ch1);
        var ch2 = document.createElement("th");
        ch2.innerHTML = "Course ID:";
        rowh.appendChild(ch2);
        var ch3 = document.createElement("th");
        ch3.innerHTML = "Grade";
        rowh.appendChild(ch3);
        //theader.appendChild(rowh);
        enrollmentTable.appendChild(rowh);
        var t = localStorage.getItem("temp1");
        alert(temp1.ID);

        //var tabody = document.createElement("tbody");

        for (i = 0; i < localStorage.getItem("length"); i++) {

            if (data.StudentID == document.getElementById("stid").value) {
                var data = localStorage.getItem("temp" + i);
                var rowb = document.createElement("tr");
                var cd1 = document.createElement("td");
                cd1.innerHTML = data.StudentID;
                rowb.appendChild(cd1);
                var cd2 = document.createElement("td");
                cd2.innerHTML = data.CourseID;
                rowb.appendChild(cd2);
                var cd3 = document.createElement("td");
                cd3.innerHTML = data.Grade;
                rowb.appendChild(cd3);
                //var ecol = document.createElement("td");
                var a = document.createElement('a');
                var linkText = document.createTextNode("Edit");
                a.appendChild(linkText);
                a.title = "Edit";
                a.href = "EnrollmentEdit.html?id=" + data.ID;
                //a.setAttribute("href", "StudentEdit.html");
                //a.innerHTML = "Edit";
                //ecol.innerHTML = a;
                //ecol.innerHTML = "<a href=\"StudentEdit.html\">Edit</a>";
                //ecol.appendChild(a);
                rowb.appendChild(a);
                enrollmentTable2.appendChild(rowb);
                alert("one row added");
            }
        }
        //enrollmentTable2.appendChild(tabody);
        
    });
    loadEnrollments();
});

function loadEnrollments() {
    EnrollmentModule.getEnrollments(storeEnrollments);
}

function storeEnrollments(data) {

    var temp = Object();

    for (i = 0; i < data.length; i++) {
        temp= {
            ID: data[i].ID,
            StudentID: data[i].StudentID,
            CourseID: data[i].CourseID,
            Grade: data[i].Grade
        };
        localStorage.setItem("temp"+i,temp)
    }

    //alert(temp.ID);

    localStorage.setItem("length", i);
}