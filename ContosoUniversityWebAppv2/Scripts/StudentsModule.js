var StudentModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getStudents: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://localhost:65326/api/Student",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getStudentById: function (id, callback) {
            //alert(id);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://localhost:65326/api/Student/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addStudent: function (student) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "http://localhost:65326/api/Student/",
                data: JSON.stringify(student),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                },
                error: function (err) {
                    alert('Error');
                }
            });

        },

        updateStudent: function (id, student) {
            alert("In update student");
            $.ajax({
                type: "PUT",
                contentType: "application/json; charset=utf-8",
                url: "http://localhost:65326/api/Student/" + id,
                data: JSON.stringify(student),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                },
                error: function (err) {
                    alert('Error');
                }
            });

        },

        deleteStudent: function (id) {

        }
    };
}());