document.addEventListener("DOMContentLoaded", function () {
    //alert("In student.js");
    //var sid = getUrlParameters("id", "", true);
    //alert("Hello!");
    document.getElementById("submit").addEventListener("click", function () {
        var dataToSend = new Object();
        //alert("In submit click function");
        var oldID = localStorage.getItem("OldID");
        var oldEDate = localStorage.getItem("OldEDate");
        //alert("OldData:\n" + oldID + "\n" + oldEDate);
        var newFName = document.getElementById("fname").value;
        var newLName = document.getElementById("lname").value;

        //alert("new last name: " + newLName );

        //alert(Number.parseInt(oldID));
        
        dataToSend = {
            ID: Number.parseInt(oldID),
            FirstName: newFName,
            LastName: newLName,
            EnrollmentDate: oldEDate
        };

        //alert(dataToSend.LastName);

        StudentModule.updateStudent(oldID, dataToSend);
    });
    loadTheStudent();
});

function loadTheStudent() {
    var sid = getUrlParameters("id", "", true);
    //alert(sid);
    StudentModule.getStudentById(sid, setPlaceHolders);
    
}

function getUrlParameters(parameter, staticURL, decode) {
    /*
     Function: getUrlParameters
     Description: Get the value of URL parameters either from 
                  current URL or static URL
     Author: Tirumal
     URL: www.code-tricks.com
    */
    var currLocation = (staticURL.length) ? staticURL : window.location.search,
        parArr = currLocation.split("?")[1].split("&"),
        returnBool = true;

    for (var i = 0; i < parArr.length; i++) {
        parr = parArr[i].split("=");
        if (parr[0] == parameter) {
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        } else {
            returnBool = false;
        }
    }

    if (!returnBool) return false;
}

function setPlaceHolders(studentInfo) {
    //alert(studentInfo.FirstName);
    document.getElementById("fname").setAttribute("value", studentInfo.FirstName);
    document.getElementById("lname").setAttribute("value", studentInfo.LastName);
    localStorage.setItem("OldID", studentInfo.ID);
    localStorage.setItem("OldEDate", studentInfo.EnrollmentDate);
    //alert("after localStorage");
}

document.getElementById("submit").addEventListener("click", function () {
    var dataToSend = new Object();
    alert("In submit click function");
    var oldID = localStorage.getItem("OldID");
    var oldEDate = localStorage.getItem("OldEDate");
    alert("OldData:\n" + oldID + "\n" + oldEDate);
    var newFName = document.getElementById("fname").getAttribute("value");
    var newLName = document.getElementById("lname").getAttribute("value");

    dataToSend = {
        ID: oldID,
        FirstName: newFName,
        LastName: newLName,
        EnrollmentDate: oldEDate
    };

    StudentModule.updateStudent(old.ID, dataToSend);
});