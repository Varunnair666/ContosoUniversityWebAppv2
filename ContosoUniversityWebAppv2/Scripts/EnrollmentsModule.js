var EnrollmentModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getEnrollments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://localhost:65326/api/Enrollment",
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
                url: "http://localhost:65326/api/Enrollment/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addEnrollment: function (enrollment) {

        },

        updateEnrollment: function (id, enrollment) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "http://localhost:65326/api/Enrollment/" + id,
                data: JSON.stringify(course),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                },
                error: function (err) {
                    alert('Error');
                }
            });

        },

        deleteEnrollment: function (id) {

        }
    };
}());