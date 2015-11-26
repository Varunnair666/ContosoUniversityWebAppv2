var EnrollmentModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getEnrollments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://universityofcontosov3.azurewebsites.net/api/Enrollment",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getEnrollmentById: function (id, callback) {
            //alert(id);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://universityofcontosov3.azurewebsites.net/api/Enrollment/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addEnrollment: function (enrollment) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "https://universityofcontosov3.azurewebsites.net/api/Enrollment/" + id,
                data: JSON.stringify(course),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                }
                /*error: function (err) {
                    alert('Error');
                }*/
            });
        },

        updateEnrollment: function (id, enrollment) {
            $.ajax({
                type: "PUT",
                contentType: "application/json; charset=utf-8",
                url: "https://universityofcontosov3.azurewebsites.net/api/Enrollment/" + id,
                data: JSON.stringify(course),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                }
                /*error: function (err) {
                    alert('Error');
                }*/
            });

        },

        deleteEnrollment: function (id) {

        }
    };
}());